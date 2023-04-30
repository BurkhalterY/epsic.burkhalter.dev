<script setup>
import { bonus, pages } from "./router"
</script>

<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li v-for="page of pages">
        <router-link :to="{ name: page.name }">
          {{ page.meta.title }}
        </router-link>
      </li>
      <br />
      <li v-for="page of bonus">
        <strong>Bonus : </strong>
        <router-link :to="{ name: page.name }">
          {{ page.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
