<template>
  <div>
    <h1>Les images</h1>
    <p>Voici comment insérer une image dans votre page HTML :</p>
    <pre
      class="language-html"
    ><ShowCode file="html/img.html" lang="html"/></pre>
    <p>
      On utilise la balise
      <ShowCode class="language-html" inlineCode="<img />" lang="html" /> qui
      est une balise auto-fermante. Une balise auto-fermante est caractérisée
      par le slash avant le crochet droit, ce qui la ferme directement. On ne
      peut donc pas mettre de contenu ou d'autres balises à l'intérieur (sauf
      les attributs bien sûr). Ici on a d'ailleurs deux attributs obligatoires :
    </p>
    <ul>
      <li>
        src : le chemin vers l'image (relatif ou absolu). Il est conseillé de
        mettre ses images dans un dossier <code>medias</code> au même niveau que
        le dossier contenant votre fichier .html<br />Vous pourrez ainsi appeler
        votre image en mettant <code>medias/mon-image.png</code>
      </li>
      <li>
        alt : le text qui sera affiché si l'image n'est pas trouvé à
        l'emplacement <code>src</code>. On l'oublie souvent mais il est
        important.
      </li>
    </ul>

    <h2>Audio et vidéo</h2>
    <p>
      Ajouter un fichier audio ou vidéo est un plus complexe car tous les
      navigateurs ne supportent pas tous les formats. Il faut ainsi en proposer
      plusieurs via la balise
      <ShowCode class="language-html" inlineCode="<source>" lang="html" />. Si
      aucun format n'est lisible sur le navigateur du client, il affichera à la
      place le texte qui se trouve en dernier.
    </p>
    <p>
      L'attribut <code>controls</code> permet d'afficher la barre de lecture et
      est donc vivement recommandé. Il s'agit d'un attribut sans paramètre et
      donc sans signe =, sa simple présence suffit.
    </p>

    <h3>Exemple audio :</h3>
    <pre
      class="language-html"
    ><ShowCode file="html/audio.html" lang="html"/></pre>

    <h3>Exemple vidéo :</h3>
    <pre
      class="language-html"
    ><ShowCode file="html/video.html" lang="html"/></pre>
    <p>
      Afin de remédier à ces problèmes de compatibilité, la plupart des sites
      postent leurs vidéos sur YouTube puis les intégrent via un
      <router-link to="/html/iframe">iframe</router-link> que nous verrons plus
      tard.
    </p>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue"

export default {
  name: "Image",
  components: {
    ShowCode,
  },
}
</script>
