<script setup>
import route from ".."

const routes = route.children
const access1 = routes.find((r) => r.meta.special)
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
      <li v-if="access1" class="mt-5">
        <strong>Bonus : </strong>
        <router-link :to="access1">{{ access1.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
