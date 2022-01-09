<template>
	<div>
		<h1>Conversion d'un for en while et inversement</h1>
		<p>Voici deux codes qui font exactement la même chose :</p>
		<table class="table">
			<thead>
				<tr>
					<th>Boucle for</th>
					<th>Boucle while</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><pre class="language-java"><ShowCode file="java/conv-for.java" lang="java"/></pre></td>
					<td><pre class="language-java"><ShowCode file="java/conv-while.java" lang="java"/></pre></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'ConversionBoucle',
		components: {
			ShowCode,
		},
	}
</script>
