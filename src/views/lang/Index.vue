<template>
	<div>
		<h1>Plan du site</h1>
		<ul>
			<li><router-link to="/lang/fr">Français</router-link></li>
			<li><router-link to="/lang/ja">Japonais</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Index',
	}
</script>
