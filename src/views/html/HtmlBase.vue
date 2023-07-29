<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Le HTML sert à structurer le contenu. Pour cela, on utilise des balises.
    </p>

    <h2>Les balises</h2>
    <p>
      Pour commencer, voici un exemple de balise que nous allons décortiquer
      juste après :
    </p>
    <ShowCode raw="<p>Hello world</p>" lang="html" />
    <p>
      Ceci est une balise de paragraphe
      <ShowCode raw="<p>" lang="html" :inline="true" />
      qui a comme contenu "Hello world". Elle a pour fonction d'afficher son
      contenu dans la page. Ce qui donne :
    </p>
    <p>Hello world</p>

    <h2>La structure de la page</h2>
    <p>
      Cependant, ce que je viens de faire n'est pas juste. Parce que je n'ai pas
      écrit la structure de la page HTML. La structure de base d'une page HTML
      est la suivante :
    </p>
    <ShowCode file="html/code/base.html" lang="html" />

    <p>Cette structure minimale est obligatoire. Analysons-la ensembles.</p>
    <p>Elle contient les balises suivantes :</p>
    <ul>
      <li>
        <ShowCode raw="<!DOCTYPE html>" lang="html" :inline="true" /> : Indique
        au navigateur la version de HTML à utiliser. Toujours utiliser cette
        valeur afin d'utiliser la dernière version : la version 5. Cette balise
        n'a pas besoin d'être fermée et ne doit pas l'être.
      </li>
      <li>
        <ShowCode raw="<html>" lang="html" :inline="true" /> : Indique le début
        du code HTML. Rien, à part le DOCTYPE, ne doit se trouver à l'extérieur
        de cette balise.
      </li>
      <ul>
        <li>
          <ShowCode raw="<head>" lang="html" :inline="true" /> : C'est ici qu'on
          va définir les métadonnées de notre page et chager les fichiers
          complémentaires tels que les fichiers CSS et JavaScript.
        </li>
        <ul>
          <li>
            <ShowCode raw="<title>" lang="html" :inline="true" /> : Le titre de
            la page qu'on peut retrouver dans le nom de l'onglet.
          </li>
          <li>
            <ShowCode raw='<meta charset="utf-8">' lang="html" :inline="true" />
            : Permet de spécifier l'encodage de la page. S'il n'est pas précisé,
            vous risquez d'avoir des problèmes avec les accents et autres
            caractères Unicode.
          </li>
        </ul>
        <li>
          <ShowCode raw="<body>" lang="html" :inline="true" /> : C'est la balise
          qui va contenir tout ce qui sera visible dans la page. Les textes, les
          images, etc...
        </li>
        <ul>
          <li>
            <ShowCode raw="<p>" lang="html" :inline="true" /> : Un balise
            paragraphe utilisée à titre d'exemple.
          </li>
        </ul>
      </ul>
    </ul>

    <h2>Créer un fichier .html</h2>
    <p>
      Pour pouvoir écrire des pages HTML, il vous faudra un éditeur de texte et
      un navigateur. Les fichiers avec l'extension .html devraient s'ouvrir
      directement avec votre navigateur par défaut en double-cliquant dessus.
      Vous pouvez copiez-collez le code ci-dessus dans votre éditeur favori pour
      faire un essai.
    </p>
  </div>
</template>
