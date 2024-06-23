<script setup>
import route from ".."

const routes = route.children
</script>

<template>
  <div>
    <ul>
      <li
        v-for="route of routes.filter(
          (r) => r.meta && !r.meta.isIndex && !r.meta.tip
        )"
      >
        <router-link :to="route">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
