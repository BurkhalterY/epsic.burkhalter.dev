<template>
	<div>
		<h1>La katakanisation<YouTubeLink url="dxIGeBFBNkM"/></h1>
		<h2>Règle 0</h2>
		<p>Ne se baser que sur la phonétique.</p>

		<h2>Règle N° 1</h2>
		<p>Retranscrire avec les sillabes qui ressemblent le plus.</p>

		<h2>Règle N° 2</h2>
		<p>Allongement.</p>

		<h2>Règle N° 3</h2>
		<p>Syllabe sans voyelle → utiliser la syllabe en U.</p>

		<h2>Règle N° 4</h2>
		<p>Pause.</p>

		<h2>Règle N° 5</h2>
		<p>Décomposer les consonnes qui s'enchaînent → les mettre en U sauf la dernière.</p>

		<h2>Règle N° 6</h2>
		<p>Syllabe sans voyelle en [t] ou [d] → ne pas utiliser les tsu et zu mais to et do.</p>

		<h2>Règle N° 7</h2>
		<p>Voyelles nasales :</p>
		<ul>
			<li>an : アン</li>
			<li>in : アン</li>
			<li>on : オン</li>
		</ul>

		<h2>Règle N° 8</h2>
		<p>Sons modifiés :</p>
		<ul>
			<li>si : シ</li>
			<li>zi : ジ</li>
			<li>ti : チ</li>
			<li>di : ジ</li>
			<li>v : b</li>
		</ul>
	</div>
</template>

<script>
	import YouTubeLink from '../../../../components/YouTubeLink.vue'

	export default {
		name: 'Katakanisation',
		components: {
			YouTubeLink,
		},
	}
</script>
