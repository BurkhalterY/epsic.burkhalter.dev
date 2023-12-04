<script setup>
import route from ".."

const routes = route.children
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <ul>
      <li
        v-for="route of routes.filter(
          (r) => r.meta && !r.meta.isIndex && !r.meta.special
        )"
      >
        <router-link :to="route">{{ route.meta.title }}</router-link>
      </li>
    </ul>
    <h2 class="mt-5">GUI</h2>
    <ul>
      <li v-for="route of routes.filter((r) => r.meta?.special)">
        <router-link :to="route">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
