<template>
  <div>
    <p>Pour l'exemple, j'ai ajouté une table t_sexe,</p>
    <img src="/bdd/medias/ajout_fk_1.png" alt="Table sexe" />
    <p>ainsi qu'un champ fk_sexe à la fin de ma table t_personne.</p>
    <img src="/bdd/medias/ajout_fk_2.png" alt="Champ fk_sexe" />
    <p>
      Pour définir le FK, cliquez sur <i>Index</i> sur la ligne du champ
      commençant par fk_
    </p>
    <img src="/bdd/medias/ajout_fk_3.png" alt="Définir l'ndex" />
    <p>Un pop-up apparait, cliquez OK pour confirmer.</p>
    <img src="/bdd/medias/ajout_fk_4.png" alt="Confirmer" />
    <p>Une petite clé grise est apparue à côté du champ.</p>
    <img src="/bdd/medias/ajout_fk_5.png" alt="Clé étrangère" />
    <p>Passez en vue relationnelle :</p>
    <img src="/bdd/medias/ajout_fk_6.png" alt="(btn) Vue relationnelle" />
    <p>Dans la partie <i>Contraintes de clé étrangère</i> :</p>
    <ol>
      <li>Le champ fk (ici fk_sexe)</li>
      <li>La table à lier (ici t_sexe)</li>
      <li>L'id (devrait se remplir tout seul, pas besoin de toucher)</li>
      <li>Cliquez <i>Sauvegarder</i> et votre relation est prête.</li>
    </ol>
    <img src="/bdd/medias/ajout_fk_7.png" alt="Contraintes de clé étrangère" />
  </div>
</template>
