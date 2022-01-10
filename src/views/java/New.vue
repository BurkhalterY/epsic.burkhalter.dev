<template>
	<div>
		<h1>Créer un nouveau projet</h1>
		<ol>
			<li>Ouvrez NetBeans.</li>
			<li>Cliquez sur Nouveau projet en haut à gauche.</li>
			<img src="/medias/java/new1.png" alt="étape 1" class="img-fluid"/>
			<li>Sélectionnez Java, puis Java Application.</li>
			<img src="/medias/java/new2.png" alt="étape 2" class="img-fluid"/>
			<li>Nommez votre programme et choisissez son emplacement.</li>
			<img src="/medias/java/new3.png" alt="étape 3" class="img-fluid"/>
			<li>Votre programme devrait ressembler à ça :</li>
			<pre class="language-java"><ShowCode file="java/new-project.java" lang="java"/></pre>
			<li>Vous pouvez alors supprimer tous les commentaires inutiles.</li>
			<pre class="language-java"><ShowCode file="java/new-project-no-commentary.java" lang="java"/></pre>
		</ol>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'New',
		components: {
			ShowCode,
		},
	}
</script>
