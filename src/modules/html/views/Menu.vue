<script setup>
import route from ".."

const routes = route.children
</script>

<template>
  <div>
    <h2>{{ route.meta.module.officialName }}</h2>
    <p v-for="route of routes.filter((r) => r.meta?.section == 'intro')">
      <router-link :to="route">{{ route.meta?.title }}</router-link>
    </p>
    <h2>HTML</h2>
    <ul>
      <li v-for="route of routes.filter((r) => r.meta?.section == 'html')">
        <router-link :to="route">{{ route.meta?.title }}</router-link>
      </li>
    </ul>
    <h2>CSS</h2>
    <ul>
      <li v-for="route of routes.filter((r) => r.meta?.section == 'css')">
        <router-link :to="route">{{ route.meta?.title }}</router-link>
      </li>
      <li>à suivre...</li>
    </ul>
    <h2>JavaScript</h2>
    <ul>
      <li>à venir...</li>
    </ul>
    <h2 class="!text-xl">Liens utiles</h2>
    <ul>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://validator.w3.org/" target="_blank">validator.w3.org</a>
        - pour vérifier votre code HTML
      </li>
    </ul>
  </div>
</template>
