<template>
  <div>
    <h1>Les liens hypertextes</h1>
    <p>
      Comme dit dans l'introduction, un site web n'est pas une page, mais un
      ensemble de pages. Pour naviguer d'une page à l'autre, on utilise des
      liens hypertextes. Ces liens ce présentent comme ceci :
      <ShowCode
        class="language-html"
        inlineCode='<a href="seconde_page.html">Texte du lien</a>'
        lang="html"
      />
    </p>

    <h2>Les attributs</h2>
    <p>
      Cette balise
      <ShowCode class="language-html" inlineCode="<a>" lang="html" /> nécessite
      obligatoirement l'attribut href. Un attribut est une sorte de "paramètre"
      que l'on va passer à la balise. Tous les attributs s'écrivent
      <code>attribut="valeur"</code> et se placent toujours dans la balise
      ouvrante de l'élément HTML. On peut aussi utiliser plusieurs attributs
      comme ceci :
    </p>
    <pre
      class="language-html"
    ><ShowCode file="html/attribute.html" lang="html"/></pre>
    <p>
      ⚠ La valeur est toujours mise entre guillemets même s'il s'agit d'un
      nombre.
    </p>

    <h2>L'attribut href</h2>
    <p>
      L'attribut href permet de spécifier une autre URL, cette dernière peut
      être relative ou absolue. C'est vers cette URL que l'utilisateur sera
      dirigé lorsqu'il cliquera dessus.
    </p>

    <h2>Relatif vs. absolu</h2>
    <p>
      Un chemin relatif cible un fichier depuis l'emplacement actuel tandis
      qu'un chemin absolu le cible depuis la racine du site.
    </p>
    <p>
      Exemple de chemin relatif : <code class="text-secondary">page.html</code
      ><br />Exemple de chemin absolu :
      <code class="text-secondary">/page.html</code>
    </p>

    <h2>Site externe</h2>
    <p>
      Pour faire un lien vers un site externe, mettre l'URL complète. Par
      exemple : https://www.google.ch
    </p>
    <pre
      class="language-html"
    ><ShowCode file="html/a-href.html" lang="html"/></pre>
    <p>
      Ici, j'ai ajouté l'attribut <code>target="_blank"</code> afin que le
      navigateur ouvre la page dans un nouvel onglet. Ce qui est une bonne
      pratique lorsqu'on pointe vers un site externe.
    </p>
    <p>Résultat : <a href="https://www.google.ch" target="_blank">Google</a></p>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue"

export default {
  name: "Hypertexte",
  components: {
    ShowCode,
  },
}
</script>
