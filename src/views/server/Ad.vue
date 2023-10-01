<template>
  <div>
    <p>
      L'AD est un annuaire qui contient toute sorte d'objets comme des
      utilisateurs, des machines, des groupes, etc.
    </p>
    <p>Le protocole pour l'administrer est <strong>LDAP</strong>.</p>
    <p>
      Le protocole pour authentifier des sessions est
      <strong>Kerberos</strong> (attention : il ne doit pas y avoir plus de 5
      minutes de décalage entre l'heure de la machine et l'heure du serveur).
    </p>
    <p>
      L'Active Directory est un produit Microsoft. Il existe d'autres annuaires
      fonctionnant avec LDAP :
    </p>
    <ul>
      <li>Open Directory &ndash; Apple</li>
      <li>Open LDAP &ndash; Linux</li>
      <li>Directory Server &ndash; Synology</li>
      <li>LDAP Server &ndash; QNAP</li>
    </ul>

    <h2>Les types d'objets</h2>
    <ul>
      <li>Utilisateurs et ordinateurs</li>
      <li>Groupes</li>
      <li>Unités d'organisation (UO / OU)</li>
      <li>Ressources (imprimantes, applications)</li>
    </ul>
    <p>
      <strong>Les comptes utilisateurs</strong> possède un identifiant et un mot
      de passe pour pouvoir s'authentifier sur le domaine.
    </p>
    <p>
      <strong>Les groupes</strong> permettent de regrouper des comptes
      utilisateurs ou ordinateurs (ou les deux) afin de gérer les droits plus
      simplement.
    </p>
    <p>
      <strong>Les unités d'organisation</strong> servent principalement à rendre
      l'administration des comptes plus faciles. Ils peuvent contenir tous types
      d'objet.
    </p>

    <h2>Arborescence</h2>
    <ul>
      <li>Une forêt contient un ou plusieurs arbres</li>
      <li>Un arbre contient un ou plusieurs domaines</li>
      <li>Un domaine contient une ou plusieurs UO</li>
      <li>Une UO contient un ou plusieurs objets</li>
    </ul>
    <img
      src="/server/medias/arborescence.png"
      alt="Arborescence"
      class="px-5"
    />
    <p>
      Les triangles bleus et oranges sont des domaines.<br />Un ensemble de
      triangles est un arbre et un ensemble d'arbres est une forêt.
    </p>
  </div>
</template>
