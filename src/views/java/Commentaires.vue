<template>
	<div>
		<h1>Les commentaires</h1>
		<p>Les commentaires servent à rendre le code plus compréhensible. Ils sont ignorés lors de la compilation.</p>

		<h3>Les commentaires sur une seule ligne</h3>
		<p>Les commentaires qui s'écrivent sur une seule ligne sont indiqué par un double slash. Attention à toujours le placer après le point-virgule.</p>
		<pre class="language-java"><ShowCode inlineCode="maVar = 2 + 2; //maVar vaut maintenant 4" lang="java"/></pre>
		<p>Ils peuvent aussi ocuper l'intégralité de la ligne.</p>
		<pre class="language-java"><ShowCode inlineCode="//maVar vaut maintenant 4" lang="java"/>
<ShowCode inlineCode="maVar = 2 + 2;" lang="java"/></pre>

		<h3>Les commentaires multi lignes</h3>
		<p>Utiles si vous devez faire des longs commentaires, sur plusieurs lignes.</p>
		<pre class="language-java"><ShowCode inlineCode="/* Salut,
Je suis un commentaire
...

Un très long commentaire
*/" lang="java"/></pre>
		<p>Ils commencent par /* et se finissent pas */.</p>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Commentaires',
		components: {
			ShowCode,
		},
	}
</script>
