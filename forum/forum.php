<?php
	if(!isset($_SESSION)){ session_start(); }

	include '../database.php';
	$reqForum = mysqli_prepare($bdd, 'SELECT t_forums.Title AS Forum_title, t_modules.Title AS Module_title, Numero FROM t_forums INNER JOIN t_modules ON t_modules.ID = t_forums.FK_Module WHERE t_forums.ID = ?');
	mysqli_stmt_bind_param($reqForum, "i", $_GET['id']);
	mysqli_stmt_execute($reqForum);
	mysqli_stmt_bind_result($reqForum, $dataForum['Forum_title'], $dataForum['Module_title'], $dataForum['Numero']);
	mysqli_stmt_store_result($reqForum);
	mysqli_stmt_fetch($reqForum);
	$module_afficher = $dataForum['Numero']!=0?'Module '.$dataForum['Numero']:$dataForum['Module_title'];

	$title = $dataForum['Forum_title'];
	include 'header.php';
?>
	<h1><?php echo $module_afficher.' - '.$dataForum['Forum_title']; ?></h1>
	<?php
		$reqMessages = mysqli_prepare($bdd, 'SELECT Pseudo, Message, Post_date FROM t_messages WHERE FK_Forum = ? AND deleted = 0');
		mysqli_stmt_bind_param($reqMessages, "i", $_GET['id']);
		mysqli_stmt_execute($reqMessages);
		mysqli_stmt_bind_result($reqMessages, $dataMessages['pseudo'], $dataMessages['message'], $dataMessages['post_date']);
		while(mysqli_stmt_fetch($reqMessages)){ ?>
			<fieldset class="bob">
				<legend class="bob"><?php echo $dataMessages['pseudo']; ?></legend>
				<p><?php echo $dataMessages['message']; ?></p>
				<i><?php echo $dataMessages['post_date']; ?></i>
			</fieldset>
		<?php }
	?>
	<br>
	<!--<button type="button" class="btn btn-primary float-right" onClick="window.location.reload()">Actualiser</button>
	<h3>Répondre</h3>
	<form action="post_message.php" method="post" enctype="multipart/form-data">
		<input type="hidden" name="id" id="id" value="<?php echo $_GET['id']; ?>" />
		<div class="form-group">
			<label for="name">Votre nom :</label>
			<input type="text" class="form-control" name="name" id="name" value="<?php if(isset($_SESSION['name'])){ echo $_SESSION['name']; } ?>" />
		</div>
		<div class="form-group">
			<label for="message">Message :</label>
			<textarea class="form-control" name="message" id="message"><?php if(isset($_SESSION['message'])){ echo $_SESSION['message']; } ?></textarea>
		</div>
		<div class="form-group">
			<label for="files[]">Joindre un fichier (facultatif) :</label>
			<input type="file" class="form-control" name="files[]" id="files" multiple />
		</div>
		<button type="submit" class="btn btn-primary">Envoyer</button>
	</form>
	<br>-->
<?php include 'footer.php'; ?>