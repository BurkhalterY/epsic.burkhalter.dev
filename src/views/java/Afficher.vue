<template>
	<div>
		<h1>Afficher du texte dans la console</h1>
		<p>Lorsque vous lancez votre programme, normalement la console apparaît en bas.</p>
		<p>Pour écrire dedans, on utilise une de ces deux fonctions :</p>
		<table class="table table-responsive">
			<thead>
				<tr>
					<th>Fonction</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>System.out.print(monTexte);</td>
					<td>Affiche la valeur de monTexte dans la console.</td>
				</tr>
				<tr>
					<td>System.out.println(monTexte);</td>
					<td>Affiche la valeur de monTexte dans la console et fait un retour à la ligne.</td>
				</tr>
			</tbody>
		</table>
		<p>La variable monTexte peut être de n'importe quel type primitif (boolean, byte, short, int, long, float, double ou char) ou un objet String.</p>

		<h3>Exemple</h3>
		<pre class="language-java"><ShowCode inlineCode='System.out.println("Hello World !");' lang="java"/></pre>

		<h3>Résultat</h3>
		<img src="/medias/java/console.png" alt="console" class="img-fluid"/>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Afficher',
		components: {
			ShowCode,
		},
	}
</script>
