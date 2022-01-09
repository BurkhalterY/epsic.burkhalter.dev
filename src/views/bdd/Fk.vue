<template>
	<div>
		<h1>Lier un champ FK_</h1>
		<p>Pour l'exemple, j'ai ajouté une table t_sexe</p>
		<img src="/medias/bdd/ajout_fk_1.png" alt="Table sexe" />
		<p>Ainsi qu'un champ fk_sexe à la fin de ma table t_personne</p>
		<img src="/medias/bdd/ajout_fk_2.png" alt="Champ fk_sexe" />
		<p>Pour définir le FK, cliquez sur index du champs fk</p>
		<img src="/medias/bdd/ajout_fk_3.png" alt="Définir l'ndex" />
		<p>Un pop-up apparait, cliquez sur OK pour confirmer.</p>
		<img src="/medias/bdd/ajout_fk_4.png" alt="Confirmer" />
		<p>Une petite clé grise est apparue à côté du champ</p>
		<img src="/medias/bdd/ajout_fk_5.png" alt="Clé étrangère" />
		<p>Passez en vue relationnelle :</p>
		<img src="/medias/bdd/ajout_fk_6.png" alt="(btn) Vue relationnelle" />
		<p>Dans la partie Contraintes de clé étrangère,</p>
		<ol>
			<li>Le champ fk (ici fk_sexe)</li>
			<li>La table à lier (ici t_sexe)</li>
			<li>L'id (devrait se remplir tout seul donc pas besoin de toucher)</li>
			<li>Cliquez sur Sauvegarder et votre relation est terminé</li>
		</ol>
		<img src="/medias/bdd/ajout_fk_7.png" alt="Contraintes de clé étrangère" />
	</div>
</template>

<script>
	export default {
		name: 'Fk',
	}
</script>
