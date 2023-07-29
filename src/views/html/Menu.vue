<script setup>
import route from "@/router/html"

const routes = route.children
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <ul>
      <li v-for="route of routes.filter((r) => r.meta && !r.meta.isIndex)">
        <router-link :to="route">
          {{ route.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
