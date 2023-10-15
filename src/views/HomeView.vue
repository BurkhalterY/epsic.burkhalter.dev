<script setup>
import access from "@/router/access"
import bdd from "@/router/bdd"
import bin from "@/router/bin"
import html from "@/router/html"
import java from "@/router/java"
import network from "@/router/network"
import poo from "@/router/poo"
import serverRoute from "@/router/server"

const routes = [access, html, bdd, bin, network, serverRoute, java, poo]

const externalLinks = [
  {
    title: "Repo du projet",
    url: "https://github.com/BurkhalterY/epsic.burkhalter.dev",
    icon: "github",
  },
  {
    title: "Moodle de l'EPSIC",
    url: "https://moodle.epsic.ch/",
    icon: "moodle",
  },
  {
    title: "Moodle exclusif aux CIE",
    url: "https://ict-moodle.ch/",
    icon: "moodle",
  },
  {
    title: "Serveur Discord de L'ELITE 2.0",
    url: "https://discord.gg/NejUt35yur",
    icon: "discord",
  },
  {
    title: "Site de JackTrash",
    url: "https://epsic.jacktrash.ch/",
    icon: "trash",
  },
  {
    title: "Horaires de l'EPSIC (down?)",
    url: "https://www.portail.vd.ch/formation/hyperplanning/epsic/invite",
    icon: "hyperplanning",
  },
  {
    title: "etml.burkhalter.dev",
    url: "https://etml.burkhalter.dev/",
    icon: "etml",
  },
]

const allNews = [
  {
    date: "03.10.2023",
    type: "success",
    content:
      "Release d'une nouvelle mise à jour et publication du code en open source.<br /><a href='https://github.com/BurkhalterY/epsic.burkhalter.dev' target='_blank'>https://github.com/BurkhalterY/epsic.burkhalter.dev</a>",
  },
  {
    date: "09.01.2022",
    type: "success",
    content:
      "J'ai à nouveau migré le site, cette fois si vers Vue 3. Cela me permettra d'ajouter du contenu plus simplement.",
  },
  {
    date: "30.08.2021",
    type: "success",
    content:
      "J'ai migré le site vers Angular. Il n'y a donc plus de PHP et la fluidité devrait être bien meilleure.",
  },
  {
    date: "01.02.2021",
    type: "success",
    content:
      "Comme promis, je retravaille un peu sur le site. Ajout du cours inter sur l'HTML (CSS et JavaScript arrivent bientôt). Par ailleurs, j'ai trié les modules par numéro puisqu'il devrait y en avoir de plus en plus.",
  },
  {
    date: "22.01.2021",
    type: "success",
    content:
      "Nouveau domaine ! Le site passe de prog.normalux.ch à epsic.burkhalter.dev. Mis à part ça, rien ne change, et, sauf erreur, toutes les pages sont correctement redirigées. Je vais essayer de me repencher un peu sur le site ces prochains temps.",
  },
  {
    date: "nov. 2020",
    type: "danger",
    content:
      "Je désactive la fonction d'envoi de message directement via le site. Les raisons sont principalement le spam et le délai de réponse élevé. <span class='line-through'>Je reste néanmoins joignable via mon serveur Discord sur lequel j'ai ouvert un salon dédié.</span>",
  },
]
</script>

<template>
  <div
    class="w-full max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
  >
    <div class="py-8 ybu-content">
      <h1 class="text-center uppercase">epsic<wbr />.burkhalter<wbr />.dev</h1>
    </div>
    <div
      class="grid grid-cols-1 mx-16 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6"
    >
      <div v-for="route of routes">
        <router-link :to="route">
          <img
            :src="`${route.path}/square.png`"
            class="border-4 border-black rounded-xl"
          />
          <figcaption class="mt-1 text-lg text-center">
            {{ route.meta.module.cie ? "CIE" : "Module" }}
            {{ route.meta.module.numero }}
            <div class="text-sm">
              {{ route.meta.module.shortName }}
            </div>
          </figcaption>
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-1 mt-8 text-center md:grid-cols-2 ybu-content">
      <div>
        <h2>Liens utiles</h2>
        <ul class="!list-inside">
          <li
            v-for="link of externalLinks"
            :style="`list-style-image: url('/home/icons/${link.icon}.ico');`"
          >
            <a :href="link.url" target="_blank">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Fil d'actualité</h2>
        <div
          class="mb-8 -mt-2 md:overflow-y-scroll border-y max-h-64 no-scrollbar"
        >
          <div
            v-for="news of allNews"
            :class="`alert-${news.type}`"
            class="text-start !m-2 !p-2"
          >
            <h3 class="inline alert-title">News {{ news.date }} :</h3>
            <div v-html="news.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
