<template>
  <div>
    <h1>Divers</h1>
    <ul>
      <li v-for="app in apps" :key="app">
        <router-link :to="'/misc/shortcuts/' + app.path">{{
          app.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { applications } from "../../assets/data/shortcuts/applications.json"

export default {
  name: "ShortcutsIndex",
  data() {
    return {
      apps: applications,
    }
  },
}
</script>
