<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Comme dit dans l'introduction, un site web n'est pas une page, mais un
      ensemble de pages. Pour naviguer d'une page à l'autre, on utilise des
      liens hypertextes. Ces liens se présentent comme ceci :
      <ShowCode
        raw='<a href="seconde_page.html">Texte du lien</a>'
        lang="html"
        :inline="true"
      />
    </p>

    <h2>Les attributs</h2>
    <p>
      Cette balise <ShowCode raw="<a>" lang="html" :inline="true" /> nécessite
      obligatoirement l'attribut href. Un attribut est une sorte de paramètre
      que l'on va passer à la balise. Tous les attributs s'écrivent
      <code>attribut="valeur"</code> et se placent toujours dans la balise
      ouvrante de l'élément HTML. On peut aussi utiliser plusieurs attributs
      comme ceci :
    </p>
    <ShowCode file="html/code/attribute.html" lang="html" />
    <p>
      ⚠ La valeur est toujours mise entre guillemets même s'il s'agit d'un
      nombre.
    </p>

    <h2>L'attribut href</h2>
    <p>
      L'attribut href permet de spécifier une autre URL. Cette dernière peut
      être relative ou absolue. C'est vers cette URL que l'utilisateur sera
      dirigé lorsqu'il cliquera sur le lien hypertexte.
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
    <ShowCode file="html/code/a-href.html" lang="html" />
    <p>
      Ici, j'ai ajouté l'attribut <code>target="_blank"</code> afin que le
      navigateur ouvre la page dans un nouvel onglet. C'est une bonne pratique
      lorsque l'on pointe vers un site externe.
    </p>
    <p>
      Résultat :
      <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Google</a>
    </p>
  </div>
</template>
