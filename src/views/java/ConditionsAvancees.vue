<template>
	<div>
		<h1>Les conditions avancées</h1>

		<h3>Le switch</h3>
		<p>Le bloc switch permet de simplifier un code où on utiliserait plusieurs else if à la suite. Exemple :</p>
		<table class="table">
			<thead>
				<tr>
					<th>If else if</th>
					<th>Switch</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<pre class="language-java"><ShowCode file="java/if-else-if-else.java" lang="java"/></pre>
					</td>
					<td>
						<pre class="language-java"><ShowCode file="java/switch.java" lang="java"/></pre>
					</td>
				</tr>
			</tbody>
		</table>
		<p>Le break est très important : il sert à sortir du switch si la condition est remplie. Si vous l'oubliez alors votre switch exécutera la condition plus toutes celles qui se trouvent après.</p>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'ConditionsAvancees',
		components: {
			ShowCode,
		},
	}
</script>
