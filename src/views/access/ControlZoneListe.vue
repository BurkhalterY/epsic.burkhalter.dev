<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>
      Ici, nous allons permettre d'interagir avec la zone de liste créée dans le
      chapitre précédent. J'insiste sur le terme "avancé" car nous allons
      utiliser beaucoup de VBA. J'essaierai d'expliquer au mieux.
    </p>
    <p>Commencez par créer 4 boutons :</p>
    <ul>
      <li>
        <span
          >Un pour l'importation d'une adresse e-mail (par importation,
          j'entends ajouter un e-mail qui existe déjà)</span
        >
      </li>
      <li><span>Un pour la création d'une adresse e-mail</span></li>
      <li><span>Un pour la suppression d'une adresse e-mail</span></li>
      <li><span>Un pour l'édition d'une adresse e-mail</span></li>
    </ul>
    <img src="/access/medias/icud.png" />
    <p>
      Choisissez des icônes qui vous parlent. Ne leur donnez pas de fonctions
      pour l'instant.
    </p>

    <h2>Ajouter une adresse</h2>
    <p>Commençons par le bouton permettant d'ajouter une adresse e-mail.</p>
    <p>Il faut utiliser l'assistant de formulaire et inclure aussi l'ID :</p>
    <img src="/access/medias/icud_c1.png" />
    <p>
      Nommez le formulaire F_Ajouter_Email car nous devrons en faire un par
      fonction.
    </p>
    <p>
      Ajoutez-y un bouton avec la fonction
      <i>Sauvegarder un enregistrement</i> :
    </p>
    <img src="/access/medias/icud_c2.png" />
    <p>
      Maintenant, passons aux choses sérieuses. Allez dans les propriétés du
      formulaire, et, sous <i>Événement</i>, cliquez sur
      <i>Après insertion</i> :
    </p>
    <img src="/access/medias/icud_c3.png" />
    <p>L'éditeur VBA s'ouvre. Collez-y le code suivant :</p>
    <ShowCode file="/access/code/Form_AfterInsert.vba" lang="vba" />
    <p>Explication du code :</p>
    <p>
      La deuxième ligne (<code>DoCmd.RunSQL</code>) permet d'exécuter une
      requête SQL. Pour faire simple, c'est une manière de modifier la base de
      données depuis le code. Pensez a remplacer tous les noms de champs par les
      vôtres, sinon Access ne les trouvera pas.
    </p>
    <p>
      Seulement, cette fonction affiche un avertissement, nous mettons donc la
      commande <code>DoCmd.SetWarnings False</code> avant afin de les désactiver
      et <code>DoCmd.SetWarnings True</code> pour les réactiver après.
    </p>
    <p>
      <code>DoCmd.Close</code> ferme simplement le formulaire, nous renvoyant
      ainsi vers le formulaire F_Personne.
    </p>
    <p>
      Pour finir, on fait un <code>Requery</code> sur le champ Emails de
      F_Personne pour l'actualiser et donc afficher la nouvelle adresse ajoutée.
    </p>
    <p>
      Il faut ensuite retourner dans F_Personne et ajouter un évènement
      <i>Sur clic</i> au bouton + :
    </p>
    <ShowCode file="/access/code/Btn_ajouter_email_Click.vba" lang="vba" />
    <p>Cela ouvrira le formulaire F_Ajouter_Email.</p>

    <h2>Importer une adresse</h2>
    <p>
      Importer n'est peut-être pas le meilleur terme. Je veux dire par là,
      associer une adresse déjà existante à la personne.
    </p>
    <p>
      Commencez par créer un nouveau formulaire avec l'assistant. Nommez-le
      F_Importer_Email (par exemple), puis supprimez-y tous les champs.
    </p>
    <p>À la place, insérez une <i>Zone de liste déroulante</i> :</p>
    <img src="/access/medias/icud_i1.png" />
    <p>Selectionnez T_Email :</p>
    <img src="/access/medias/icud_i2.png" />
    <p>Prenez au moins l'ID et l'adresse :</p>
    <img src="/access/medias/icud_i3.png" />
    <p>
      Il n'y a plus grand chose à configurer par la suite, vous pouvez faire
      suivant, suivant, suivant...
    </p>
    <img src="/access/medias/icud_i4.png" />
    <img src="/access/medias/icud_i5.png" />
    <img src="/access/medias/icud_i6.png" />
    <img src="/access/medias/icud_i7.png" />
    <p>
      Une fois la liste déroulante créée, ajoutez un bouton, dans
      <i>Événement</i> → <i>Sur clic</i>. Cela ouvre l'éditeur VBA.
    </p>
    <p>
      Vous pouvez y coller le même code que précédemment, à l'exception de la
      requête SQL qui diffère un peu :
    </p>
    <ShowCode file="/access/code/Btn_selectionner_Click.vba" lang="vba" />
    <p>
      Et, ne pas oublier de donner un évènement au bouton v dans le formulaire
      F_Personne :
    </p>
    <ShowCode file="/access/code/Btn_importer_email_Click.vba" lang="vba" />

    <h2>Supprimer une adresse</h2>
    <p>
      Le bouton <i>Supprimer</i> n'aura pas pour effet de supprimer l'adresse,
      mais juste la relation entre la personne et l'adresse.
    </p>
    <p>
      Ici, pas besoin de créer de formulaire. Allez dans les propriétés du
      bouton et ajouté un l'événement <i>Sur clic</i> :
    </p>
    <ShowCode file="/access/code/Btn_supprimer_email_Click.vba" lang="vba" />
    <p>
      Nous avons ici deux conditions. La première est qu'il y ai un élément
      sélectionné dans la liste. La deuxième est que l'utilisateur confirme la
      suppression.
    </p>
    <p>Ensuite, ça lance du SQL comme avant et réactualise le champ.</p>
    <p>Il vous faudra sûrement renommer quelques trucs pour que cela marche.</p>

    <h2>Modifier une adresse</h2>
    <p>
      La modification est très proche de la création. Vous pouvez déjà
      copier-coller le formulaire F_Ajouter_Email et le renommer
      F_Modifier_Email.
    </p>
    <p>
      Dans les événements, supprimez-le <i>Après insertion</i> et cliquez sur
      <i>Après MAJ</i>.
    </p>
    <p>
      Le code est très simple, je pense qu'il n'y a même pas besoin de
      l'expliquer :
    </p>
    <ShowCode file="/access/code/Form_AfterUpdate.vba" lang="vba" />
    <p>Il faut aussi mettre un peu de code sur le bouton d'édition :</p>
    <ShowCode file="/access/code/Btn_modifier_email_Click.vba" lang="vba" />
    <p>Je fais juste un petit test pour voir si un élément est sélectionné.</p>

    <p>
      Voilà ! Tous les boutons devraient maintenant fonctionner. Le fichier est
      disponible <a href="/access/files/Database2.accdb">ici</a> si vous voulez
      vérifier ou comparer quelque chose.
    </p>
  </div>
</template>

<style scoped>
code {
  @apply bg-gray-200;
}
</style>
