<template>
  <div>
    <h1>Conversion Base64</h1>
    <strong>Valeur :</strong><br />
    <textarea class="w-100" v-model="content" @keyup="toBase64()"></textarea
    ><br />
    <br />
    <strong>Base64 :</strong><br />
    <textarea class="w-100" v-model="base64" @keyup="fromBase64()"></textarea
    ><br />
    <p class="text-danger">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Base64",
  data() {
    return {
      content: "",
      base64: "",
      msg: "",
    }
  },
  methods: {
    toBase64() {
      this.base64 = window.btoa(unescape(encodeURIComponent(this.content)))
    },
    fromBase64() {
      try {
        this.content = decodeURIComponent(escape(window.atob(this.base64)))
        this.msg = ""
      } catch (e) {
        this.msg = "Base64 invalide."
      }
    },
  },
}
</script>
