<template>
  <h2>{{ app.title }}</h2>
  <template v-for="group in groups" :key="group">
    <details open>
      <summary>
        <h3>{{ group.title }}</h3>
      </summary>
      <p v-html="group.description"></p>
      <table class="table table-responsive">
        <tr>
          <th>Raccourci</th>
          <th>Description</th>
        </tr>
        <tr v-for="shortcut in group.shortcuts" :key="shortcut">
          <td>
            <KeyCode :keys="shortcut.keys" />
          </td>
          <td>{{ shortcut.description }}</td>
          <td v-if="shortcut.flags">
            <img
              v-for="flag in shortcut.flags"
              :key="flag"
              :src="'/medias/misc/shortcuts/flags/' + flag + '.png'"
              :alt="flags[flag]"
              :title="flags[flag]"
            />
          </td>
        </tr>
      </table>
    </details>
  </template>
</template>

<style scoped>
h3 {
  display: inline;
}
summary::marker {
  font-size: 1.75rem;
}
</style>

<script>
import KeyCode from "../../components/KeyCode.vue"

export default {
  name: "Shortcuts",
  components: {
    KeyCode,
  },
  data() {
    return {
      app: "",
      groups: [],
      flags: {
        "no-ubuntu": "Indisponible sous Ubuntu",
      },
    }
  },
  async created() {
    const appName = this.$route.params.app
    this.app = (
      await import(
        `../../assets/data/shortcuts/collections/${appName}/_index.json`
      )
    ).data
    document.title += " - " + this.app.title

    for (let groupPath of this.app.groups) {
      const group = await import(
        `../../assets/data/shortcuts/collections/${groupPath}.json`
      )
      this.groups.push(group)
    }
  },
}
</script>
