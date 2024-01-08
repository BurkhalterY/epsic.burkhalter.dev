<?php
	if(!isset($_SESSION)){ session_start(); }
	$title = 'Accueil';
	include 'header.php';
?>
	<h1>Forums</h1>
	
	<div class="alert alert-danger" role="alert"><p><strong>News 11/2020 :</strong> Je désactive la fonction d'envoie de message directement sur le site. Les raisons sont principalement le spam et le délai de réponse élevé. Je reste néanmoins joignable via mon serveur Discord sur lequel j'ai ouvert un salon spécialisé.</p>Lien du serveur : <a href="https://discord.gg/ry3XrTPUzQ">https://discord.gg/ry3XrTPUzQ</a></div>

	<table class="table">
		<tr>
			<th>N° module</th>
			<th>Titre</th>
			<th>Dernier message</th>
			<th>Résolu</th>
		</tr>
		<?php
			include '../database.php';

			$req = mysqli_query($bdd, 'SELECT t_forums.ID, Numero, t_modules.Title AS Module_name, t_forums.Title, Last_message, Solved FROM t_forums INNER JOIN t_modules ON t_modules.ID = t_forums.FK_Module WHERE deleted = 0 ORDER BY Last_message DESC');
			while($data = mysqli_fetch_assoc($req)){
				$icon = $data['Solved'] ? '<img src="medias/check.png" alt="Résolu !" />' : '<img src="medias/not.png" alt="Non résolu" />';
				$module_afficher = $data['Numero']!=0?$data['Numero']:$data['Module_name'];
				echo '<tr><td>'.$module_afficher.'</td><td><a href="forum.php?id='.$data['ID'].'">'.$data['Title'].'</a></td><td>'.$data['Last_message'].'</td><td>'.$icon.'</td></tr>';
			}
			mysqli_free_result($req);
		?>
	</table>
	
	<!--<hr> Toi qui te crois intelligent, sâche que j'ai fais exprès de ne pas supprimer ce formulaire mais d'uniquement le commenter. C'est juste pour moi -> tg !
	<h3>Poser une question</h3>
	<form action="create_forum.php" method="post" enctype="multipart/form-data">
		<div class="form-group">
			<label for="name">Votre nom :</label>
			<input type="text" class="form-control" name="name" id="name" value="<?php if(isset($_SESSION['name'])){ echo $_SESSION['name']; } ?>" />
		</div>
		<div class="form-row">
			<div class="col">
				<label for="module">Concerne le module :</label>
			</div>
			<div class="col">
				<select name="module" id="module" class="form-control">
				<?php
					$reqListModules = mysqli_query($bdd, 'SELECT ID, Numero, Title FROM t_modules WHERE Activated = 1');
					while($data = mysqli_fetch_assoc($reqListModules)){
						if($data['Numero'] == 0){
							$nom_afficher = $data['Title'];
						} else {
							$nom_afficher = $data['Numero'].' - '.$data['Title'];
						}
						if($_SESSION['module'] == $data['ID']){
							echo '<option value="'.$data['ID'].'" selected>'.$nom_afficher.'</option>';
						} else {
							echo '<option value="'.$data['ID'].'">'.$nom_afficher.'</option>';
						}
						
					}
				?>
				</select>
			</div>
		</div>
		<div class="form-group">
			<label for="title">Titre :</label>
			<input type="text" class="form-control" name="title" id="title" value="<?php if(isset($_SESSION['title'])){ echo $_SESSION['title']; } ?>" />
		</div>
		<div class="form-group">
			<label for="message">Question :</label>
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