<script setup>
import route from "@/router/bdd"

const routes = route.children
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <ul>
      <li v-for="(route, i) of routes.filter((r) => r.meta && !r.meta.isIndex)">
        <router-link :to="route" :class="i == 0 ? 'font-bold' : ''">{{
          route.meta.title
        }}</router-link>
      </li>
      <br />
      <li>
        <a href="https://github.com/BurkhalterY/Ecommerce-BD104" target="_blank"
          >Mon projet au module 104</a
        >
        (édition 2019)
      </li>
    </ul>
  </div>
</template>
