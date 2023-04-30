<script setup>
import { getModuleFullName } from "@/utils"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <div>
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }" text="Accueil" />
        </li>
        <li class="navbar-text y-separator">&gt;</li>
        <li class="nav-item">
          <router-link class="nav-link" :to="route">
            {{ getModuleFullName(route.meta) }}
          </router-link>
        </li>
        <li class="navbar-text y-separator">&gt;</li>
        <li class="nav-item">
          <router-link class="nav-link" :to="route">
            {{ route.meta.title }}
          </router-link>
        </li>
      </ul>
      <span class="navbar-text">&copy; Burkhalter Yannis</span>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  background-color: v-bind("route.meta.style.bgColor");
  color: white;
  padding: 0;
  margin-bottom: 20px;
}

nav ul,
nav span {
  background-color: v-bind("route.meta.style.itemColor");
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
}

nav a {
  color: v-bind("route.meta.style.textColor");
}

.y-separator {
  font-size: smaller;
}
</style>
