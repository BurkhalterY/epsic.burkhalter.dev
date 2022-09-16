<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li><router-link to="/server/dns">Les DNS</router-link></li>
      <li>
        <router-link to="/server/ad">L'Active Directory (AD)</router-link>
      </li>
    </ul>
    <strong>Astuces :</strong>
    <ul>
      <li><router-link to="/server/mmc">MMC</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
}
</script>
