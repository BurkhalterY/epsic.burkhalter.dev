<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const routes = computed(() => route.matched[0].children)
const index = computed(() =>
  routes.value.findIndex((r) => r.path == route.path)
)
const nextPage = computed(() => routes.value[index.value + 1])
const previousPage = computed(() => routes.value[index.value - 1])
</script>

<template>
  <div class="flex flex-col">
    <nav class="w-full">
      <ul>
        <li>
          <router-link class="pl-1" to="/">Accueil</router-link>
        </li>
        <li>/</li>
        <li>
          <router-link
            :class="{ 'pr-1': route.meta.isIndex }"
            :to="`/${route.meta.module.path}`"
          >
            {{ route.meta.module.cie ? "CIE" : "Module" }}
            {{ route.meta.module.numero }}
          </router-link>
        </li>
        <template v-if="!route.meta.isIndex">
          <li>/</li>
          <li>
            <router-link class="pr-1" :to="route">
              {{ route.meta.title }}
            </router-link>
          </li>
        </template>
        <li class="float-right">&copy; Burkhalter Yannis</li>
      </ul>
    </nav>
    <div
      class="flex-grow w-full max-w-sm pt-4 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl ybu-content"
    >
      <h1 v-if="!route.meta.isIndex">{{ route.meta.title }}</h1>
      <h1 v-else>
        {{ route.meta.module.cie ? "CIE" : "Module" }}
        {{ route.meta.module.numero }}
      </h1>
      <router-view />
    </div>
    <div
      class="flex flex-col justify-around w-full max-w-sm py-8 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl sm:flex-row gap-y-4"
    >
      <div class="w-full h-10 sm:w-64 sm:h-12">
        <router-link
          v-if="previousPage"
          :to="previousPage"
          class="flex items-center justify-between w-full h-full gap-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          <div class="w-6">←</div>
          <div
            class="overflow-hidden w-max whitespace-nowrap overflow-ellipsis"
          >
            {{ previousPage.meta.title }}
          </div>
        </router-link>
      </div>
      <div class="w-full h-10 sm:w-64 sm:h-12">
        <router-link
          v-if="nextPage"
          :to="nextPage"
          class="flex items-center justify-between w-full h-full gap-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          <span
            class="overflow-hidden w-max whitespace-nowrap overflow-ellipsis"
          >
            {{ nextPage.meta.title }}
          </span>
          <div class="w-6">→</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  color: v-bind("route.meta.module.style.textColor");
  background-color: v-bind("route.meta.module.style.navBgColor");
}
nav > ul > li {
  @apply inline-block p-2 py-2;
  background-color: v-bind("route.meta.module.style.itemBgColor");
}
</style>
