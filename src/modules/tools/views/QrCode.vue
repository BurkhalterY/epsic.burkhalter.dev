<script setup>
import QrcodeVue from "qrcode.vue"
import { ref } from "vue"

const qrValue = ref(window.location.href)
</script>

<template>
  <div>
    <div class="grid grid-cols-2 p-1 -m-1 gap-1.5">
      <textarea v-model="qrValue" class="w-full h-full border"></textarea>
      <qrcode-vue :value="qrValue" size="200" render-as="svg" />
    </div>
    <div class="alert-success text-start">
      <h3 class="inline alert-title">Credits</h3>
      <div>
        To generate this QR Code, we use the library `<a
          target="_blank"
          href="https://www.npmjs.com/package/qrcode.vue"
          >qrcode.vue</a
        >`.
      </div>
    </div>
  </div>
</template>
