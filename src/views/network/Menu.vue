<script setup>
import route from "@/router/network"

const routes = route.children
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <ul>
      <li
        v-for="route of routes.filter((r) => r.meta && !r.meta.isIndex)"
        :class="{ 'mt-5': route.meta.br }"
      >
        <router-link :to="route">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
