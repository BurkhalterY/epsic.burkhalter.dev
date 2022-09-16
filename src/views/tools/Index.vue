<template>
  <div>
    <h1>Les outils</h1>
    <ul>
      <li><router-link to="/tools/base64">Base64</router-link></li>
      <li>
        <router-link to="/tools/bases"
          >Conversion de bases (bin, oct, dec, hex, etc...)</router-link
        >
      </li>
      <li>
        <router-link to="/tools/passgen"
          >Générateurs de mots de passe</router-link
        >
      </li>
      <li>
        <router-link to="/tools/qrcode">Générateur de QR Code</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
