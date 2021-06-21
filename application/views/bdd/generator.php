<pre>Mettre les noms des tables sans le t_ et au singulier.
Exemple : t_personnes devient personne
Ne cocher qu'une seule case ID par table. L'id doit être de type int.</pre>

<h1>Générateur de site Python tout fait</h1>
<form method="post">
	<?php

		$list_type = array('int', 'varchar', 'date', 'timestamp', 'float');

		if(isset($_POST['tables'])){
			$tables = $_POST['tables'];
		} else {
			$tables = array();
		}
		if(isset($_POST['add_table'])){
			$tables[] = array('name' => '', 'columns' => array(array('name' => 'id', 'type' => 'int', 'pk' => true)));
		}
	?>

	<?php foreach ($tables as $key => $table) { ?>
		<h3>Table : <input type="text" name="tables[<?=$key;?>][name]" value="<?=$table['name'];?>"></h3>
		<?php
			if(isset($_POST['add_field'.$key])){
				$table['columns'][] = array('name' => '', 'type' => 'varchar');
			}
		?>
		<?php foreach ($table['columns'] as $key2 => $col) { ?>
			<div class="row">
				<div class="col-sm-1"><?=$key2+1;?></div>
				<div class="col-sm-5">
					<input type="text" name="tables[<?=$key;?>][columns][<?=$key2;?>][name]" value="<?=$col['name'];?>">
				</div>
				<div class="col-sm-4">
					<select name="tables[<?=$key;?>][columns][<?=$key2;?>][type]">
						<?php foreach ($list_type as $type) { ?>
							<option <?php if($type == $col['type']){ echo 'selected'; } ?>><?=$type;?></option>
						<?php } ?>
					</select>
				</div>
				<div class="col-sm-2">
					<input type="checkbox" name="tables[<?=$key;?>][columns][<?=$key2;?>][pk]" value="id" <?php if(isset($col['pk'])){echo 'checked';}?>> Est l'ID<br>
				</div>
			</div>
		<?php } ?>
		<input class="btn" type="submit" value="Ajouter un champ" name="add_field<?=$key;?>">
		<hr>
	<?php } ?>
	<input class="btn" type="submit" value="Ajouter une table" name="add_table">
	<br>
	<input class="btn btn-primary" type="submit" value="Générer" name="generate">
</form>
<?php
	if(isset($_POST['generate'])){
		$time = time();
		include FCPATH.'generator/php/hello_flask.php';
		include FCPATH.'generator/php/GestionTables.php';
		include FCPATH.'generator/php/NOM_PRENOM_SUJET_BD_104.php';
		include FCPATH.'generator/php/Templates/PagePrincipaleHome.php';
		include FCPATH.'generator/php/Templates/tables/TablesAfficher.php';
		include FCPATH.'generator/php/Templates/tables/TablesAdd.php';
		include FCPATH.'generator/php/Templates/tables/TablesEdit.php';
		include FCPATH.'generator/php/Templates/tables/TablesDelete.php';
		include FCPATH.'generator/php/_copy.php';
		include FCPATH.'generator/php/zip.php';

		echo '<a href="'.base_url('generator/output/'.$time.'.zip').'">Télécharger en ZIP</a>';;
	}
?>