<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      L'intégration est une technique qui permet d'insérer une page web complète
      dans votre site. La page est "encapsulée" dans une frame qui se comportera
      comme une div. La balise à utiliser et
      <ShowCode raw="<iframe>" lang="html" :inline="true" /> avec l'attribut
      <code>src</code>.
    </p>
    <ShowCode file="/html/code/iframe.html" lang="html" />
    <iframe src="/" class="w-3/4 mx-auto border h-96"></iframe>

    <h2>Vidéo YouTube</h2>
    <p>
      C'est avec ce même procédé que l'on va pouvoir intégrer une vidéo YouTube
      à l'intérieur de notre page. Ça se passe directement dans l'onglet
      PARTAGER de la vidéo à intégrer :
    </p>
    <img src="/html/medias/youtube-share-1.png" alt="Step 1" class="mx-auto" />
    <hr />
    <p>Puis dans Intégrer :</p>
    <img src="/html/medias/youtube-share-2.png" alt="Step 2" class="mx-auto" />
    <hr />
    <p>
      Copiez-collez le code. Vous pouvez aussi définir quelques options avancées
      que je vous laisserai découvrir :
    </p>
    <img src="/html/medias/youtube-share-3.png" alt="Step 3" class="mx-auto" />
    <hr />
    <p>Résultat :</p>
    <iframe
      src="https://www.youtube.com/embed/kJQP7kiw5Fk"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full max-w-[560px] mx-auto aspect-video"
    />
  </div>
</template>
