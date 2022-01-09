<template>
	<div>
		<h1>Symboles Nassi-Shneidermann</h1>
		<p>Une petite liste des symboles Nassi-Shneidermann :</p>
		<table class="table">
			<thead>
				<tr>
					<th>Symbole</th>
					<th>Code</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><img src="/medias/java/nassi-main.png" alt="main" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-main.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-instruction.png" alt="instruction" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-instruction.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-if.png" alt="if" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-if.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-switch.png" alt="if" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-switch.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-while.png" alt="while" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-while.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-do-while.png" alt="dpo while" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-do-while.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-for.png" alt="for" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-for.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-methode-appel.png" alt="for" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-methode-appel.java" lang="java"/></pre></td>
				</tr>
				<tr>
					<td><img src="/medias/java/nassi-methode-declaration.png" alt="for" /></td>
					<td><pre class="language-java"><ShowCode file="java/nassi-methode-declaration.java" lang="java"/></pre><p>Attention : ce code s'écrit en dehors de la fonction main()</p></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Structogramme',
		components: {
			ShowCode,
		},
	}
</script>
