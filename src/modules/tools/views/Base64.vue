<script setup>
import { ref } from "vue"

const content = ref("")
const base64 = ref("")
const msg = ref("")

const toBase64 = () => {
  base64.value = window.btoa(encodeURIComponent(content.value))
  msg.value = ""
}
const fromBase64 = () => {
  try {
    content.value = decodeURIComponent(window.atob(base64.value))
    msg.value = ""
  } catch (e) {
    msg.value = "Base64 invalide !"
  }
}
</script>

<template>
  <div class="grid grid-cols-2 p-1 -m-1 gap-1.5 h-96 overflow-y-auto resize-y">
    <div class="w-full flex flex-col gap-1.5">
      <label for="content" class="block font-semibold">Valeur :</label>
      <textarea
        id="content"
        v-model="content"
        @keyup="toBase64()"
        class="w-full border resize-none h-full"
      ></textarea>
    </div>
    <div class="w-full flex flex-col gap-1.5">
      <label for="base64" class="block font-semibold">Base64 :</label>
      <textarea
        id="base64"
        v-model="base64"
        @keyup="fromBase64()"
        class="w-full border resize-none h-full"
      ></textarea>
      <div v-if="msg" class="alert-danger !my-0">{{ msg }}</div>
    </div>
  </div>
</template>
