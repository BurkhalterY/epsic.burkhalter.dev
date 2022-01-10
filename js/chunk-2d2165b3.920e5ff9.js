(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2165b3"],{c1b1:function(e,s,a){"use strict";a.r(s);var n=a("7a23"),i=Object(n["h"])('<h1>Importer, ajouter, modifier et supprimer des éléments d&#39;une zone de liste (niveau avancé)</h1><p>Ici, nous allons permettre d&#39;interagir avec la zone de liste crée dans le chapitre précèdent. J&#39;insiste sur le terme &#39;avancé&#39; car nous allons utiliser beaucoup de VBA. J&#39;essaierais d&#39;expliquer au mieux.</p><p>Commencez par créer 4 boutons :</p><ul><li>Un pour l&#39;importation d&#39;une adresse email (par importation, j&#39;entends ajouter un email qui existe déjà)</li><li>Un pour la création d&#39;une adresse email</li><li>Un pour la suppression d&#39;une adresse email</li><li>Un pour l&#39;édition d&#39;une adresse email</li></ul><img src="/medias/access/icud.png"><p>Choisissez des icônes qui vous parlent, ne leur donné pas de fonctions pour l&#39;instant.</p><h3>Ajouter une adresse</h3><p>Commençons par le bouton permettant d&#39;ajouter une adresse email.</p><p>Il faut utiliser l&#39;assistant de formulaire et inclure aussi l&#39;ID :</p><img src="/medias/access/icud_c1.png"><p>Nommez le formulaire F_Ajouter_Email, car nous devrons en faire un par fonction.</p><p>Ajoutez-y un bouton avec la fonction Sauvegarder un enregistrement</p><img src="/medias/access/icud_c2.png"><p>Maintenant, passons aux choses sérieuses. Allez dans les propriétés du formulaire, sous Événement, cliquer sur Après insertion</p><img src="/medias/access/icud_c3.png"><p>L&#39;éditeur VBA s&#39;ouvre, collez-y le code suivant :</p>',16),r={class:"language-visual-basic"},l=Object(n["g"])("p",null,"Explication du code :",-1),u=Object(n["g"])("p",null,"La deuxième ligne (DoCmd.RunSQL) permet d'exécuter une requête SQL, pour faire simple, c'est une manière de modifier la base de données depuis le code. Pensez a remplacer tous les noms de champs par les vôtres, sinon Access ne les trouveras pas.",-1),t=Object(n["g"])("p",null,"Seulement, cette fonction affiche un avertissement, nous mettons donc la commande DoCmd.SetWarnings False avant afin de les désactiver et DoCmd.SetWarnings True après pour les réactiver.",-1),c=Object(n["g"])("p",null,"DoCmd.Close ferme simplement le formulaire donc on devrait être retourné sur le formulaire F_Personne.",-1),o=Object(n["g"])("p",null,"Pour finir, on fait un Requery sur le champ Emails de F_Personne pour l'actualiser et donc afficher la nouvelle adresse ajoutée.",-1),p=Object(n["g"])("p",null,"Il faut ensuite retourner dans F_Personne et ajouter un évènement Sur clic au bouton + :",-1),m={class:"language-visual-basic"},d=Object(n["h"])('<p>Cela ouvrira le formulaire F_Ajouter_Email</p><h3>Importer une adresse</h3><p>Importer n&#39;est peut-être pas le meilleur terme. Je veux dire par là, associer une adresse déjà existante a la personne.</p><p>Commencez par créer un nouveau formulaire avec l&#39;assistant. Nommez le F_Importer_Email (par exemple) puis supprimez-y tous les champs.</p><p>Insérez à la place une Zone de liste déroulante</p><img src="/medias/access/icud_i1.png"><p>Selectionnez T_Email</p><img src="/medias/access/icud_i2.png"><p>Prenez au moins l&#39;ID et l&#39;adresse</p><img src="/medias/access/icud_i3.png"><p>Il n&#39;y a plus grand chose à configurer par la suite, vous pouvez faire suivant, suivant, suivant...</p><img src="/medias/access/icud_i4.png"><img src="/medias/access/icud_i5.png"><img src="/medias/access/icud_i6.png"><img src="/medias/access/icud_i7.png"><p>Une fois la liste déroulante créée, ajoutez un bouton, dans Événement, Sur clic, cela ouvre l&#39;éditeur VBA.</p><p>Vous pouvez y coller le même code que précédemment, à l&#39;exception de la requête SQL qui diffère un peu.</p>',17),b={class:"language-visual-basic"},g=Object(n["g"])("p",null,"Et, ne pas oublier de donner un évènement au bouton v dans le formulaire F_Personne",-1),v={class:"language-visual-basic"},j=Object(n["g"])("h3",null,"Supprimer une adresse",-1),f=Object(n["g"])("p",null,"Le bouton Supprimer n'aura pas pour effet de supprimer l'adresse, mais juste la relation entre la personne et l'adresse.",-1),O=Object(n["g"])("p",null,"Ici, pas besoin de créer de formulaire. Allez dans les propriétés du bouton - et ajouté un l'événement Sur clic.",-1),_={class:"language-visual-basic"},h=Object(n["g"])("p",null,"Nous avons ici 2 condition, la première c'est qu'il y ai un élément sélectionné dans la liste, la deuxième c'est que l'utilisateur confirme la suppression.",-1),z=Object(n["g"])("p",null,"Ensuite, ça lance du SQL comme avant et réactualise le champ.",-1),q=Object(n["g"])("p",null,"Il vous faudra surement renommer quelques trucs pour que cela marche.",-1),C=Object(n["g"])("h3",null,"Modifier une adresse",-1),A=Object(n["g"])("p",null,"La modification est très proche de la création. Vous pouvez déjà copier-coller le formulaire F_Ajouter_Email et le renommer F_Modifier_Email.",-1),S=Object(n["g"])("p",null,"Dans les événements, supprimer le Après insertion et cliquez sur Après MAJ.",-1),I=Object(n["g"])("p",null,"Le code est très simple, je pense qu'il n'y a même pas besoin de l'expliquer :",-1),x={class:"language-visual-basic"},F=Object(n["g"])("p",null,"Il faut aussi mettre un peu de code sur le bouton d'édition :",-1),L={class:"language-visual-basic"},E=Object(n["g"])("p",null,"Je fais juste un petit test pour voir si un élément est sélectionné.",-1),k=Object(n["g"])("p",null,[Object(n["i"])("Voilà, tous les boutons devraient maintenant marcher. Le fichier est disponible "),Object(n["g"])("a",{href:"/medias/access/Database2.accdb"},"ici"),Object(n["i"])(" si vous voulez vérifier ou comparer quelque chose.")],-1);function w(e,s,a,w,y,B){var D=Object(n["z"])("ShowCode");return Object(n["s"])(),Object(n["f"])("div",null,[i,Object(n["g"])("pre",r,[Object(n["j"])(D,{file:"access/Form_AfterInsert.vba",lang:"vba"})]),l,u,t,c,o,p,Object(n["g"])("pre",m,[Object(n["j"])(D,{file:"access/Btn_ajouter_email_Click.vba",lang:"vba"})]),d,Object(n["g"])("pre",b,[Object(n["j"])(D,{file:"access/Btn_selectionner_Click.vba",lang:"vba"})]),g,Object(n["g"])("pre",v,[Object(n["j"])(D,{file:"access/Btn_importer_email_Click.vba",lang:"vba"})]),j,f,O,Object(n["g"])("pre",_,[Object(n["j"])(D,{file:"access/Btn_supprimer_email_Click.vba",lang:"vba"})]),h,z,q,C,A,S,I,Object(n["g"])("pre",x,[Object(n["j"])(D,{file:"access/Form_AfterUpdate.vba",lang:"vba"})]),F,Object(n["g"])("pre",L,[Object(n["j"])(D,{file:"access/Btn_modifier_email_Click.vba",lang:"vba"})]),E,k])}var y=a("02c0"),B={name:"ControlZoneListe",components:{ShowCode:y["a"]}},D=a("d959"),J=a.n(D);const P=J()(B,[["render",w]]);s["default"]=P}}]);
//# sourceMappingURL=chunk-2d2165b3.920e5ff9.js.map