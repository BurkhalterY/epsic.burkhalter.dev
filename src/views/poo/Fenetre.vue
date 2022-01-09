<template>
	<div>
		<h1>Première fenêtre</h1>
		<p>Pour créer une fenêtre en Java, il faut créer une nouvelle classe héritée de la classe JFrame. JFrame est une classe permettant d'afficher une fenêtre et d'y configurer pas mal d'options.</p>
		<p>Notre classe Fenetre :</p>
		<pre class="language-java"><ShowCode file="poo/fenetre0.java" lang="java"/></pre>
		<p>Et la classe principale dans laquelle nous instancions cette Fenetre :</p>
		<pre class="language-java"><ShowCode file="poo/fenetre1.java" lang="java"/></pre>
		<p>Lancez le programme, une fenêtre vide devrait apparaitre au milieu de l'écran :</p>
		<img src="/medias/poo/fenetre.png" alt="Fenêtre de 600x800" />
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Fenetre',
		components: {
			ShowCode,
		},
	}
</script>
