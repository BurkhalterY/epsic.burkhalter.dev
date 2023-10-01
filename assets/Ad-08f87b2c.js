import{_ as e,o as s,c as t,B as r}from"./index-7f407549.js";const n="/server/medias/arborescence.png",i={},o=r('<p> L&#39;AD est un annuaire qui contient toute sorte d&#39;objets comme des utilisateurs, des machines, des groupes, etc. </p><p>Le protocole pour l&#39;administrer est <strong>LDAP</strong>.</p><p> Le protocole pour authentifier des sessions est <strong>Kerberos</strong> (attention : il ne doit pas y avoir plus de 5 minutes de décalage entre l&#39;heure de la machine et l&#39;heure du serveur). </p><p> L&#39;Active Directory est un produit Microsoft. Il existe d&#39;autres annuaires fonctionnant avec LDAP : </p><ul><li>Open Directory – Apple</li><li>Open LDAP – Linux</li><li>Directory Server – Synology</li><li>LDAP Server – QNAP</li></ul><h2>Les types d&#39;objets</h2><ul><li>Utilisateurs et ordinateurs</li><li>Groupes</li><li>Unités d&#39;organisation (UO / OU)</li><li>Ressources (imprimantes, applications)</li></ul><p><strong>Les comptes utilisateurs</strong> possède un identifiant et un mot de passe pour pouvoir s&#39;authentifier sur le domaine. </p><p><strong>Les groupes</strong> permettent de regrouper des comptes utilisateurs ou ordinateurs (ou les deux) afin de gérer les droits plus simplement. </p><p><strong>Les unités d&#39;organisation</strong> servent principalement à rendre l&#39;administration des comptes plus faciles. Ils peuvent contenir tous types d&#39;objet. </p><h2>Arborescence</h2><ul><li>Une forêt contient un ou plusieurs arbres</li><li>Un arbre contient un ou plusieurs domaines</li><li>Un domaine contient une ou plusieurs UO</li><li>Une UO contient un ou plusieurs objets</li></ul><img src="'+n+'" alt="Arborescence" class="px-5"><p> Les triangles bleus et oranges sont des domaines.<br>Un ensemble de triangles est un arbre et un ensemble d&#39;arbres est une forêt. </p>',14),u=[o];function l(a,p){return s(),t("div",null,u)}const d=e(i,[["render",l]]);export{d as default};
