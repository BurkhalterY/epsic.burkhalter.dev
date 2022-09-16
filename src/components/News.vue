<template>
  <div id="news">
    <div class="alert alert-success" role="alert">
      <p>
        <strong>News 09.01.2022 :</strong> J'ai à nouveau migré le site, cette
        fois si vers Vue 3. Cela me permettra d'ajouter du contenu plus
        simplement (1 page = 1 fichier).
      </p>
    </div>
    <div class="alert alert-success" role="alert">
      <p>
        <strong>News 30.08.2021 :</strong> J'ai migré le site vers Angular. Il
        n'y a donc plus de PHP et la fluidité devrait être bien meilleure.
      </p>
    </div>
    <div class="alert alert-success" role="alert">
      <p>
        <strong>News 01.02.2021 :</strong> Comme promis, je retravaille un peu
        sur le site. Ajout du cours inter sur l'HTML (CSS et JavaScript arrivent
        bientôt). Par ailleurs, j'ai trié les modules par numéro puisqu'il
        devrait y en avoir de plus en plus.
      </p>
    </div>
    <div class="alert alert-success" role="alert">
      <p>
        <strong>News 22.01.2021 :</strong> Nouveau domaine ! Le site passe de
        prog.normalux.ch à epsic.burkhalter.dev. Mis à part ça, rien ne change
        et, normalement, toutes les pages sont correctement redirigées. Je vais
        essayer de me repencher un peu sur le site ces prochains temps.
      </p>
    </div>
    <div class="alert alert-danger" role="alert">
      <p>
        <strong>News Nov. 2020 :</strong> Je désactive la fonction d'envoi de
        message directement sur le site. Les raisons sont principalement le spam
        et le délai de réponse élevé. Je reste néanmoins joignable via mon
        serveur Discord sur lequel j'ai ouvert un salon spécialisé.
      </p>
      Lien du serveur :
      <a href="https://discord.gg/ry3XrTPUzQ" target="_blank"
        >https://discord.gg/ry3XrTPUzQ</a
      >
    </div>
  </div>
</template>

<style scoped>
#news {
  display: block;
  max-height: 200px;
  overflow-y: auto;
}
</style>

<script>
export default {
  name: "News",
}
</script>
