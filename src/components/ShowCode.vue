<template>
	<code innerHTML="content"><slot></slot></code>
</template>

<script>
	export default {
		name: 'ShowCode',
		props: {
			lang: String,
			file: String,
			inlineCode: String,
		},
	}
</script>
