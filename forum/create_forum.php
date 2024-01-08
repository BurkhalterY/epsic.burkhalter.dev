<?php
	if(!isset($_SESSION)){ session_start(); }

	if (!empty($_POST['name']) && !empty($_POST['module']) && !empty($_POST['title']) && !empty($_POST['message'])) {
		include '../database.php';

		$req = mysqli_prepare($bdd, 'INSERT INTO t_forums(FK_Module, Title) VALUES(?, ?)');
		mysqli_stmt_bind_param($req, "is", $_POST['module'], htmlspecialchars($_POST['title']));
		mysqli_stmt_execute($req);

		$LastInsertId = mysqli_query($bdd, 'SELECT LAST_INSERT_ID() FROM t_forums');
		$data = mysqli_fetch_assoc($LastInsertId);

		$message = htmlspecialchars($_POST['message']);

		for($i = 0; $i < count($_FILES['files']['name']); $i++){
			if($_FILES['files']['error'][$i] != 4){
				$infosfichier = pathinfo($_FILES['files']['name'][$i]);

				$file_name = htmlspecialchars(basename($_FILES['files']['name'][$i]));
				$file_const = $file_name;
				$j = 1;
				while(file_exists('uploads/' . $file_name)){
					$file_name = pathinfo($file_const, PATHINFO_FILENAME).'('.$j.').'.pathinfo($file_const, PATHINFO_EXTENSION);
					$j++;
				}

				move_uploaded_file($_FILES['files']['tmp_name'][$i], 'uploads/' . $file_name);

				$extension_upload = strtolower($infosfichier['extension']);
				$extensions_images = array('jpg', 'jpeg', 'gif', 'png', 'ico', 'svg', 'bmp');
				$extensions_audios = array('mp3', 'wav');
				$extensions_videos = array('mp4', 'webm');
				$extensions_object = array('swf');

				if(in_array($extension_upload, $extensions_images)){
					$message .= '<br><img src="uploads/' . htmlspecialchars($file_name) . '" alt="' . htmlspecialchars($file_name) . '">';
				} else if(in_array($extension_upload, $extensions_audios)){
					$message .= '<br><audio controls><source src="uploads/' . htmlspecialchars($file_name) . '" type="audio/' . $extension_upload . '"></audio>';
				} else if(in_array($extension_upload, $extensions_videos)){
					$message .= '<br><video controls><source src="uploads/' . htmlspecialchars($file_name) . '" type="video/' . $extension_upload . '"></video>';
				} else if(in_array($extension_upload, $extensions_object)){
					$message .= '<br><object data="uploads/' . htmlspecialchars($file_name) . '"></object>';
				} else {
					$message .= '<br><a href="uploads/' . htmlspecialchars($file_name) . '">' . htmlspecialchars($file_name) . '</a>';
				}
			}
		}

		$req = mysqli_prepare($bdd, 'INSERT INTO t_messages(Pseudo, Message, FK_Forum, IP, USER_AGENT) VALUES(?, ?, ?, ?, ?)');
		mysqli_stmt_bind_param($req, "ssiss", htmlspecialchars($_POST['name']), nl2br($message), $data['LAST_INSERT_ID()'], $_SERVER["REMOTE_ADDR"], $_SERVER['HTTP_USER_AGENT']);
		mysqli_stmt_execute($req);

		mysqli_close($bdd);
		unset($_SESSION['module']);
		unset($_SESSION['title']);
		unset($_SESSION['message']);
		
		$to = 'info@normalux.ch';
		$subject = 'Nouvelle question : "'.$_POST['title'].'"';
		$body = 'Yo Super Admin,

Un nouveau message vient d\'être posté sur les forums de prog.normalux.ch :

https://prog.normalux.ch/forum/forum.php?id='.$_POST['id'].'

Bonne journée !';

		$headers = "From: < no-reply@normalux.ch >\r\n";
		$headers .= "Content-Type: text/plain;charset=utf-8 \r\n";
		$headers .= "Reply-To: no-reply@normalux.ch \r\n";
		mail($to, $subject, $body, $headers);
		
		header('Location: forum.php?id='.$data['LAST_INSERT_ID()']);
	} else {
		$_SESSION['name'] = empty($_POST['name']) ? '' : $_POST['name'];
		$_SESSION['module'] = empty($_POST['module']) ? '' : $_POST['module'];
		$_SESSION['title'] = empty($_POST['title']) ? '' : $_POST['title'];
		$_SESSION['message'] = empty($_POST['message']) ? '' : $_POST['message'];
		header('Location: index.php');
	}
?>