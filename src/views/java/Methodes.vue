<template>
	<div>
		<h1>Les méthodes</h1>
		<p>Les méthodes permettent de subdiviser un programme en plusieurs parties et d'éviter la redondance.</p>
		<img src="/medias/java/methodes.png" alt="methodes" class="img-fluid"/>
		<br><br>
		<p>Son avantage est qu'elle peut être utiliser plusieurs fois dans le programme. Plus besoin de copier-coller un code, il suffit de le mettre dans une méthode.</p>

		<h3>Déclaration</h3>
		<p>Une méthode se déclare comme suit :</p>

		<pre class="language-java"><ShowCode file="java/methode.java" lang="java"/></pre>
		<ul>
			<li><strong>public</strong> et <strong>static</strong> : ne vous en préoccuper pas pour l'instant.</li>
			<li><strong>typeRetour</strong> : le type de variable que la méthode retourne, tapez void si elle ne retourne rien.</li>
			<li><strong>nomMethode</strong> : le nom de la méthode, mêmes règles qu'avec les noms de variable.</li>
			<li><strong>typeArg1 arg1</strong> : un ou plusieurs argument(s) et son/leur type, facultatif.</li>
			<li><strong>return x</strong> : Ce que retourne la fonction, ne pas mettre si retourne void.</li>
		</ul>

		<h3>Exemple</h3>
		<p>Le code suivant contient une fonction additionner() qui prend deux paramètres et les additionne.</p>
		<pre class="language-java"><ShowCode file="java/additionner.java" lang="java"/></pre>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Methodes',
		components: {
			ShowCode,
		},
	}
</script>
