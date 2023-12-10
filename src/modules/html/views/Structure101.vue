<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Le module 101 exige que vous utilisiez une structure bien précise dans
      votre body. Ce n'est pas une manière de faire spécialement répandue dans
      le développement web, mais dans le cadre de ce module, nous devons
      l'utiliser.
    </p>
    <ShowCode file="/html/code/structure-101.html" lang="html" />
    <p>
      Cette structure permet de bien séparer les 4 parties du body que sont :
    </p>
    <ul>
      <li>
        <strong>L'entête (header)</strong> : peut contenir, par exemple, le logo
        du site
      </li>
      <li>
        <strong>Le menu (navigation)</strong> : un menu contenant des liens vers
        les principales pages du site
      </li>
      <li>
        <strong>Le contenu (content)</strong> : là où nous mettrons tout le
        contenu spécifique à la page
      </li>
      <li>
        <strong>Le pied de page (footer)</strong> : liens vers d'autres sites,
        copyright, etc...
      </li>
    </ul>
  </div>
</template>
