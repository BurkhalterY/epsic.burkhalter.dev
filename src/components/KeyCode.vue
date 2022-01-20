<template>
	<span v-for="(key, index) in keys" :key="key">
		<KeyCode v-if="Array.isArray(key)" :keys="key"/>
		<span v-else-if="key == '&&'">, </span>
		<span v-else-if="key == '||'"><br>ou<br></span>
		<span v-else>
			<span v-if="index > 0">&nbsp;+&nbsp;</span>
			<kbd>{{ key }}</kbd>
		</span>
	</span>
</template>

<style scoped>
	kbd {
		font-family: 'aes-icons', Consolas;
	}
</style>

<script>
	export default {
		name: 'KeyCode',
		props: {
			keys: Array,
		},
	}
</script>
