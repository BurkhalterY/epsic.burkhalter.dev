<template>
  <div>
    <h1>Les interfaces</h1>
    <p>
      Une interface ressemble beaucoup à une classe abstraite. Mais avec une
      grosse différence : une classe peut utiliser plusieurs interfaces.
    </p>
    <p>Déclaration d'une interface :</p>
    <pre
      class="language-java"
    ><ShowCode file="poo/interfaces0.java" lang="java"/></pre>
    <p>Utilisation d'une interface dans une classe :</p>
    <pre
      class="language-java"
    ><ShowCode file="poo/interfaces1.java" lang="java"/></pre>
    <br />
    <p>
      Cas pratique : vous voulez que certaines de vos classes puissent afficher
      une description d'elles-mêmes
    </p>
    <p>On crée donc une classe abstraite Description par exemple :</p>
    <pre
      class="language-java"
    ><ShowCode file="poo/interfaces2.java" lang="java"/></pre>
    <p>
      Et dans toutes nos classe où l'on veut qu'elle puissent afficher une
      description, on implémente l'interface : Exemple avec 2 classes.
    </p>
    <pre
      class="language-java"
    ><ShowCode file="poo/interfaces3.java" lang="java"/></pre>
    <pre
      class="language-java"
    ><ShowCode file="poo/interfaces4.java" lang="java"/></pre>
    <p>
      On peut ainsi faire des tableaux de type Description et le boucler pour
      afficher toutes les descriptions.
    </p>
  </div>
</template>

<script>
import ShowCode from "../../components/ShowCode.vue";

export default {
  name: "Interfaces",
  components: {
    ShowCode,
  },
};
</script>
