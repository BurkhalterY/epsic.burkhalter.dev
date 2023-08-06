<template>
  <div>
    <p>
      Les DNS (pour Domain Name System) est un service qui traduit les noms de
      domaine en adresses IP.
    </p>
    <p>
      Pour comprendre le fonctionnement des DNS, il faut voir comment se forme
      un nom de domaine. Prenons par exemple le domaine www.epsic.ch<br />
      Il est constitué de :
    </p>
    <ul>
      <li>www → hôte</li>
      <li>epsic → domaine</li>
      <li>ch → TLD (Top level domain)</li>
    </ul>
    <p>Le point étant un séparateur.</p>
    <p>La combinaison du domaine et du TLD forme le suffixe DNS</p>
    <p>
      La combinaison de l'hôte et du suffixe DNS forme le FQDN (Fully Qualified
      Domain Name (Nom de domaine pleinement qualifié).
    </p>

    <h2>La requête DNS</h2>
    <p>
      Quand vous entrez l'adresse d'un site dans la barre d'adresse, le
      navigateur va envoyer une requête aux serveurs pour connaître l'IP du site
      en question et pouvoir s'y connecter.
    </p>
    <p>Déroulement de la requête :</p>
    <ul>
      <li>Le client check dans son cache s'il ne connaît pas déjà le site.</li>
      <li>
        Si le client ne connaît pas le site, il demande au serveur DNS de son
        FAI (Fournisseur d'accès Internet).
      </li>
      <li>
        Si le serveur du FAI ne connaît pas le site, il demande à un serveur
        TLD.
      </li>
      <li>
        Si le serveur TLD ne connaît pas le site, il demande à l'un des 13
        serveurs root mondiaux qui ne connaissent pas les sites, mais
        connaissent tous les serveurs TLD. Il redirige donc sur l'un des serveur
        TLD correspondant au TLD.
      </li>
      <li>Le serveur TLD renvoie l'IP du site.</li>
    </ul>
    <p>Il existe deux modes : le mode récursif et le mode itératif</p>
    <p>
      Mode récursif : Le PC passe par un serveur DNS et ne se préoccupe pas des
      actions effectuées par ce dernier pour recevoir la réponse.<br />
      Mode itératif : Le PC passe par tous les serveurs DNS lui-même.
    </p>

    <h2>Les types d'enregistrements</h2>
    <p>
      Certains domaines possèdent plusieurs services différents (site web,
      e-mail, etc.).<br />
      Le serveur DNS va alors rediriger la requête vers le bon service en se
      basant sur les enregistrements DNS pour le domaine.
    </p>
    <table>
      <tr>
        <th>Type</th>
        <th>Explication</th>
      </tr>
      <tr>
        <td>A</td>
        <td>IPv4 d'un hôte</td>
      </tr>
      <tr>
        <td>AAAA</td>
        <td>IPv6 d'un hôte</td>
      </tr>
      <tr>
        <td>CNAME (Canonical NAME)</td>
        <td>
          Permettent de créer des alias, c.-à-d. d'associer plusieurs noms
          d'hôtes à une seule machine
        </td>
      </tr>
      <tr>
        <td>MX (Mail exchange record)</td>
        <td>FQDN d'un serveur SMTP (e-mails)</td>
      </tr>
      <tr>
        <td>SOA (Server of authority)</td>
        <td>
          Nom d'hôte du serveur qui héberge la zone DNS principale (une seule
          SOA par zone)
        </td>
      </tr>
      <tr>
        <td>NS (Name server)</td>
        <td>Permet de définir plusieurs serveur de nom</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
th {
  @apply text-start;
}
</style>
