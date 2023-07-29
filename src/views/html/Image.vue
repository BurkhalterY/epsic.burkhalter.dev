<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <h2>Images</h2>
    <p>Voici comment insérer une image dans votre page HTML :</p>
    <ShowCode file="html/code/img.html" lang="html" />
    <p>
      On utilise la balise
      <ShowCode raw="<img />" lang="html" :inline="true" /> qui est une balise
      auto-fermante. Une balise auto-fermante est caractérisée par le slash
      avant le crochet droit, ce qui la ferme directement. On ne peut donc pas
      mettre de contenu ou d'autres balises à l'intérieur (sauf les attributs
      bien sûr). Ici on a d'ailleurs deux attributs obligatoires :
    </p>
    <ul>
      <li>
        <code>src</code> : le chemin vers l'image (relatif ou absolu). Il est
        conseillé de mettre ses images dans un dossier <code>medias</code> au
        même niveau que le dossier contenant votre fichier HTML. Vous pourrez
        ainsi appeler votre image en mettant <code>medias/mon-image.png</code>.
      </li>
      <li>
        <code>alt</code> : le text qui sera affiché si l'image n'est pas trouvée
        à l'emplacement <code>src</code>. On l'oublie souvent mais il est tout
        de même important.
      </li>
    </ul>

    <h2>Audio et vidéo</h2>
    <p>
      Ajouter un fichier audio ou vidéo est un peu plus complexe car tous les
      navigateurs ne supportent pas tous les mêmes formats. Il faut ainsi en
      proposer plusieurs via la balise
      <ShowCode raw="<source>" lang="html" :inline="true" />. Si aucun format
      n'est lisible sur le navigateur du client, il affichera à la place le
      texte qui se trouve en dernier.
    </p>
    <p>
      L'attribut <code>controls</code> permet d'afficher la barre de lecture et
      est donc vivement recommandé. Il s'agit d'un attribut sans paramètre et
      donc sans signe =, sa simple présence suffit.
    </p>

    <span class="text-lg">Exemple audio</span>
    <ShowCode file="html/code/audio.html" lang="html" />

    <span class="text-lg">Exemple vidéo</span>
    <ShowCode file="html/code/video.html" lang="html" />
    <p>
      Afin de remédier à ces problèmes de compatibilité, la plupart des sites
      postent leurs vidéos sur YouTube puis les intégrent via un
      <router-link to="/html/code/iframe">iframe</router-link>. Nous
      découvrirons plus tard comment faire cela.
    </p>
  </div>
</template>
