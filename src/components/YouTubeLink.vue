<template>
	<a target="_blank" :href="'https://www.youtube.com/watch?v='+url">↗</a>
</template>

<script>
	export default {
		name: 'YouTubeLink',
		props: {
			url: String,
		}
	}
</script>
