<template>
  <span v-for="(key, index) in keys" :key="key" class="shortcut">
    <KeyCode v-if="Array.isArray(key)" :keys="key" />
    <span v-else-if="key == '&&'">, </span>
    <span v-else-if="key == '||'"><br />ou<br /></span>
    <span v-else>
      <span v-if="index > 0"> + </span>
      <kbd>{{ format(key) }}</kbd>
    </span>
  </span>
</template>

<style scoped>
.shortcut {
  white-space: nowrap;
}
kbd {
  font-family: "aes-icons", Consolas;
}
</style>

<script>
export default {
  name: "KeyCode",
  props: {
    keys: Array,
  },
  methods: {
    format(key) {
      switch (key) {
        case "Shift":
          return "⇧Shift";
        case "Caps Lock":
          return "⇪Caps Lock";
        case "Tab":
          return "Tab↹";
        case "Enter":
          return "Enter↵";
        case "Backspace":
          return "Backspace⇤";
        case "Del":
          return "Del⌦";
        default:
          return key;
      }
    },
  },
};
</script>
