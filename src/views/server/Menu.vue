<script setup>
import route from "@/router/server"

const routes = route.children
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <ul>
      <li
        v-for="route of routes.filter(
          (r) => r.meta && !r.meta.isIndex && !r.meta.tip
        )"
      >
        <router-link :to="route">{{ route.meta.title }}</router-link>
      </li>
    </ul>
    <strong>Astuces :</strong>
    <ul>
      <li v-for="route of routes.filter((r) => r.meta && r.meta.tip)">
        <router-link :to="route">{{ route.meta.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
