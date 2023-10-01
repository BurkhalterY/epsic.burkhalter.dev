<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Les commentaires servent à rendre le code plus compréhensible. Ils sont
      ignorés lors de la compilation.
    </p>

    <h2>Les commentaires sur une seule ligne</h2>
    <p>
      Les commentaires qui s'écrivent sur une seule ligne sont indiqués par un
      double slash. Attention à toujours le placer après le point-virgule.
    </p>
    <ShowCode raw="maVar = 2 + 2; // maVar vaut maintenant 4" lang="java" />
    <p>Ils peuvent aussi occuper l'intégralité de la ligne.</p>
    <ShowCode
      raw="maVar = 2 + 2;&NewLine;// maVar vaut maintenant 4"
      lang="java"
    />

    <h2>Les commentaires multilignes</h2>
    <p>
      Ils sont utiles si vous devez faire des longs commentaires sur plusieurs
      lignes.
    </p>
    <ShowCode
      raw="/* Salut,
Je suis un commentaire
...

Un très long commentaire
*/"
      lang="java"
    />
    <p>Ils commencent par <code>/*</code> et finissent par <code>*/</code>.</p>
  </div>
</template>
