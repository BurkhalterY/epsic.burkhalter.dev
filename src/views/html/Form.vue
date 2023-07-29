<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Les formulaires servent souvent à communiquer avec un backend. Ils peuvent
      aussi être utilisés pour laisser l'utilisateur intéragir avec le
      JavaScript en y entrant des informations qui seront traitées. Sur cette
      page, nous n'allons voir ni l'une ni l'autre des méthodes. Car il n'y a
      pas de process dans le backend d'un site statique et parce que le
      JavaScript fera l'objet de la 3<sup>e</sup> partie du module.
    </p>
    <p>Voici un exemple de formulaire avec quelques champs :</p>
    <div class="grid grid-cols-2">
      <div>
        <ShowCode file="html/code/form.html" lang="html" />
      </div>
      <div class="text-center">
        <br />
        <form action="login_form.php" method="POST">
          <label for="username">Nom d'utilisateur :&nbsp;</label>
          <input type="text" name="username" id="username" /><br />
          <label for="password">Mot de passe :&nbsp;</label>
          <input type="password" name="password" id="password" /><br />
          <input
            type="submit"
            value="Envoyer"
            class="!rounded cursor-pointer bg-neutral-100 hover:bg-neutral-200"
          />
        </form>
      </div>
    </div>
    <p>Regardons tout cela de plus près :</p>
    <ul>
      <li>
        Les champs doivent se trouver dans une balise
        <ShowCode raw="<form>" lang="html" :inline="true" />.
      </li>
      <li>
        La balise <ShowCode raw="<form>" lang="html" :inline="true" /> a deux
        attributs :
      </li>
      <ul>
        <li>
          <code>action</code> va être la page sur laquelle envoyer la requête.
        </li>
        <li>
          <code>method</code> va être le verbe HTTP utilisé (GET ou POST). Dans
          ce cours, nous allons principalement utiliser GET puisque nous n'avons
          pas de backend.
        </li>
        <ul>
          <li>GET va passer les champs dans l'URL.</li>
          <li>
            POST les passe dans la requête HTTP et nécessite donc un serveur
            backend pour les récupérer (ex. PHP).
          </li>
        </ul>
      </ul>
      <li>
        Les champs sont définis par la balise
        <ShowCode raw="<input>" lang="html" :inline="true" /> qui prend aussi
        deux attributs :
      </li>
      <ul>
        <li>
          <code>type</code> est le type de champs. Valeurs possibles :
          <code>text</code>, <code>password</code>, <code>checkbox</code>,
          <code>radio</code>, <code>file</code>, etc.
        </li>
        <li>
          <code>name</code> qui permet de récupérer la valeur du formulaire dans
          le backend ou via le JavaScript.
        </li>
      </ul>
      <li>
        Les noms affichés des champs doivent se trouver dans une balise
        <ShowCode raw="<label>" lang="html" :inline="true" /> qui possède
        l'attribut :
      </li>
      <ul>
        <li>
          <code>for</code> qui "lie" le label au champ. Principalement pour
          qu'un clic sur le label permette directement de modifier le champ
          (essayez-par vous-même 😉). Pour que cela fonctionne, il faut avoir
          ajouté un attribut <code>id</code> au champ. En effet, l'attribut
          <code>for</code> se réfère à l'ID et non au <code>name</code>. Mettre
          la même valeur suffira.
        </li>
      </ul>
      <li>
        ⚠ les champs comme les labels sont des balises de type
        <router-link to="/html/types-balises">inline</router-link>. Si vous ne
        les forcez pas (par exemple avec un
        <ShowCode raw="<br>" lang="html" :inline="true" />), elles se mettront
        toutes sur une ligne.
      </li>
      <li>
        Les boutons d'envoi ne sont en fait que des balises
        <ShowCode raw="<input>" lang="html" :inline="true" /> avec le type
        <code>submit</code>. Leur attribut <code>value</code> permet de modifier
        le texte de leur bouton.
      </li>
      <ul>
        <li>
          Il existe aussi un bouton de type <code>reset</code> qui vide
          entièrement le formulaire.
        </li>
      </ul>
    </ul>

    <h2>Liste déroulante</h2>
    <p>
      La balise <ShowCode raw="<input>" lang="html" :inline="true" /> ne permet
      pas de créer de liste déroulante. À la place, nous utilisons
      <ShowCode raw="<select>" lang="html" :inline="true" /> et
      <ShowCode raw="<option>" lang="html" :inline="true" /> :
    </p>
    <div class="grid grid-cols-2">
      <div>
        <ShowCode file="html/code/select.html" lang="html" />
      </div>
      <div class="text-center">
        <br />
        <select name="character" id="character">
          <option>Mario</option>
          <option>Luigi</option>
          <option>Wario</option>
          <option>Waluigi</option>
        </select>
      </div>
    </div>
    <p>
      ⚠ J'ai omis ici la balise
      <ShowCode raw="<form>" lang="html" :inline="true" /> pour des raisons de
      lisibilité, mais ne l'oubliez pas.
    </p>
    <p>
      Il y a vraiment énormément d'attributs en HTML. Il m'est difficile de tous
      les présenter au risque de donner trop d'informations. Le mieux est que
      vous cherchiez par vous-même lorsque vous avez besoin de quelque chose en
      particulier (je recommande
      <a href="https://www.w3schools.com/html/default.asp" target="_blank">
        W3Schools
      </a>
      au début pour le HTML).
    </p>
  </div>
</template>

<style scoped>
input,
select {
  @apply m-0.5 p-0.5 border border-neutral-500 rounded-sm;
}
</style>
