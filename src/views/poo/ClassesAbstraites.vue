<template>
	<div>
		<h1>Les classes abstraites</h1>
		<p>Une classe abstraite est une classe qui ne peut pas être instancié car certaines de ses méthodes ne sont pas définies. Son but est d'en faire hériter une autre classe pour surcharger ces méthodes. C'est une espèce de modèle de classe.</p>
		<p>Voici comment déclarer une classe abstraite et ses méthodes :</p>
		<pre class="language-java"><ShowCode file="poo/classesAbstraites0.java" lang="java"/></pre>

		<h3>Exemple</h3>
		<p>Pour mieux comprendre leur fonctionnement, voici un exemple complet :</p>
		<p>Imaginez un programme permettant de calculer le périmètre et l'aire de plusieurs formes. Toutes ces formes auraient une manière différente de calculer le périmètre et l'aire. Si on veut les rassembler dans un tableau par exemple, il nous faudrait une classe parente commune et donc forcément abstraite.<br>Nous allons commencer avec 3 clases : Forme, Rectangle et Cercle.</p>
		<p>La classe abstraite Forme :</p>
		<pre class="language-java"><ShowCode file="poo/classesAbstraites1.java" lang="java"/></pre>
		<p>La classe Rectangle :</p>
		<pre class="language-java"><ShowCode file="poo/classesAbstraites2.java" lang="java"/></pre>
		<p>La classe Cercle :</p>
		<pre class="language-java"><ShowCode file="poo/classesAbstraites3.java" lang="java"/></pre>
		<p>La classe principale :</p>
		<pre class="language-java"><ShowCode file="poo/classesAbstraites4.java" lang="java"/></pre>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'ClassesAbstraites',
		components: {
			ShowCode,
		},
	}
</script>
