<script setup>
import route from "@/router/bin"

const routes = route.children
const calculatorTip = routes.find((r) => r.meta.special)
const part3 = routes.find((r) => r.meta.section == 3)
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <p v-if="calculatorTip">
      <router-link :to="calculatorTip">
        Astuce : {{ calculatorTip.meta.title }}
      </router-link>
    </p>
    <h2>Partie 1</h2>
    <ul>
      <li
        v-for="route of routes.filter((r) => r.meta.section == 1)"
        :class="{ 'mt-5': route.meta.br }"
      >
        <router-link :to="route">
          {{ route.meta.title }}
        </router-link>
      </li>
    </ul>
    <h2>Partie 2</h2>
    <ul>
      <li v-for="route of routes.filter((r) => r.meta.section == 2)">
        <router-link :to="route">
          {{ route.meta.title }}
        </router-link>
      </li>
    </ul>
    <h2 v-if="part3">
      <router-link :to="part3">{{ part3.meta.title }}</router-link>
    </h2>
    <h2 v-else>Partie 3</h2>
    <h2>Partie 4 (TBA)</h2>
  </div>
</template>
