<script setup>
import Prism from "prismjs"
import "prismjs/components/prism-java"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-visual-basic"
import "prismjs/themes/prism.css"
import { ref } from "vue"

Prism.manual = true

const props = defineProps({
  lang: String,
  file: String,
  raw: String,
  inline: Boolean,
})

const html = ref("")

if (props.file) {
  fetch(props.file)
    .then((response) => response.text())
    .then((content) => {
      html.value = Prism.highlight(content, Prism.languages[props.lang])
    })
} else if (props.raw) {
  html.value = Prism.highlight(props.raw, Prism.languages[props.lang])
}
</script>

<template>
  <code
    v-if="props.inline"
    :class="`language-${props.lang}`"
    v-html="html"
    data-code="true"
  />
  <pre
    v-else
    :class="`language-${props.lang}`"
  ><code v-html="html" data-code="true"/></pre>
</template>
