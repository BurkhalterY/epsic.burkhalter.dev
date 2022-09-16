<template>
  <div>
    <h1>Structure attendue pour le module 101</h1>
    <p>
      Le module 101 exige que vous utilisiez une structure bien précise dans
      votre body.
    </p>
    <pre
      class="language-html"
    ><ShowCode file="html/structure-101.html" lang="html"/></pre>
    <p>
      Cette structure permet de bien séparer les 4 parties du body que sont :
    </p>
    <ul>
      <li>
        <strong>L'entête (header)</strong> : peut contenir par exemple logo du
        site
      </li>
      <li>
        <strong>Le menu (navigation)</strong> : un menu (liens vers les
        principales pages du site)
      </li>
      <li>
        <strong>Le contenu (content)</strong> : là où on va mettre tout le
        contenu spécifique à la page
      </li>
      <li>
        <strong>Le pied de page (footer)</strong> : liens vers d'autres sites,
        copyright, etc...
      </li>
    </ul>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue"

export default {
  name: "Structure101",
  components: {
    ShowCode,
  },
}
</script>
