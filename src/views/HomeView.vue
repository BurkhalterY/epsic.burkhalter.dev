<script setup>
import access from "@/router/access"
import html from "@/router/html"

const routes = [access, html]

const externalLinks = [
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
    title: "Horaires de l'EPSIC",
    url: "https://www.portail.vd.ch/formation/hyperplanning/epsic/invite",
    icon: "hyperplanning",
  },
]

const allNews = [
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
      <!-- <p class="text-justify">
        Messieurs bonjour ! et bienvenue sur EPSIC.BURKHALTER.DEV. Il fut un
        temps où, certainement comme vous, j'étais apprenti. C'est à cet époque
        que ce lieu a été créé. Ce site était un incontournable pour tout
        apprenti en informatique ayant fréquenté l'EPSIC à l'époque. J'ai
        ensuite obtenu mon CFC de développeur d'applications et l'on m'a, dès
        lors, forcé à quitter ce glorieux établissement.
      </p> -->
      <!-- <p class="text-justify">
        je prennais peine à réexpliquer divers modules vu au sein de ce glorieux
        bâtiment qu'est l'EPSIC. Bien qu'ayant été forcé de quitter cet
        établissement à la suite de l'obtention d'un CFC, il me semble
        entièrement normal que cette partie de la toile perdure afin que la
        postérité puisse en profiter.
      </p>
      <p class="text-justify">
        pouvez aussi poser vos questions en rejoigant le serveur Discord, ou y
        apporter vos idées d'amélioration. Je suis ouvert à toutes les questions
        donc n'hésitez pas. Il est bien sûr possible que je commette des
        erreurs. Si vous en trouvez, merci de me les signaler. Le contenu de ce
        site n'est pas exsaustif et ne sera pas, à lui seul, suffisant pour
        maîtriser un module. Sur ce, révisez bien :)
      </p> -->
    </div>
    <div class="grid grid-cols-3 mx-16 gap-x-16 gap-y-8">
      <div v-for="route of routes">
        <router-link :to="route">
          <img
            :src="`${route.path}/square.png`"
            class="border-4 border-black rounded-xl"
          />
          <figcaption class="text-lg text-center">
            {{ route.meta.module.cie ? "CIE" : "Module" }}
            {{ route.meta.module.numero }}
            <div class="text-sm">
              {{ route.meta.module.shortName }}
            </div>
          </figcaption>
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-2 mt-8 text-center ybu-content">
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
        <div class="mb-8 overflow-y-scroll border-y max-h-64 no-scrollbar">
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
