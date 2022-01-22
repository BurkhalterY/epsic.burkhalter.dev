<template>
	<div>
		<h1>Plan du site</h1>
		<ul>
			<li><router-link to="/lang/ja/s1/ecriture">Les systèmes d'écriture</router-link></li>
			<li><router-link to="/lang/ja/s1/kana">Les kana</router-link></li>
			<li><router-link to="/lang/ja/s1/trace">Tracer les kana</router-link></li>
			<li><router-link to="/lang/ja/s1/accents">Les accents</router-link></li>
			<li><router-link to="/lang/ja/s1/pause">La pause</router-link></li>
			<li><router-link to="/lang/ja/s1/allongements">Les allongements</router-link></li>
			<li><router-link to="/lang/ja/s1/combinaisons">Les combinaisons</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Index',
	}
</script>
