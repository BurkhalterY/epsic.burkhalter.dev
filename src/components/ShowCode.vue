<template>
	<code v-html="content"></code>
</template>

<script>
	import Prism from 'prismjs';
	import 'prismjs/components/prism-java';
	import 'prismjs/components/prism-sql';
	import 'prismjs/components/prism-visual-basic';

	Prism.manual = true;

	export default {
		name: 'ShowCode',
		props: {
			lang: String,
			file: String,
			inlineCode: String,
		},
		data() {
			let content = "";
			if(!this.inlineCode) {
				const fileContent = require('!raw-loader!../assets/code/'+this.file).default;
				content = Prism.highlight(fileContent, Prism.languages[this.lang]);
			} else {
				content = Prism.highlight(this.inlineCode, Prism.languages[this.lang]);
			}
			return { content: content };
		}
	}
</script>
