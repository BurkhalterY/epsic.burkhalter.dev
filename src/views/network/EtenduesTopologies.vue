<template>
  <div>
    <h2>Étendues des réseaux</h2>
    <table>
      <tr class="text-left">
        <th>Étendue</th>
        <th>Distance max.</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td>PAN</td>
        <td>1 m</td>
        <td>Bluetooth, infrarouge</td>
      </tr>
      <tr>
        <td>LAN</td>
        <td>1 km</td>
        <td>Réseau local, Wi-Fi</td>
      </tr>
      <tr>
        <td>MAN</td>
        <td>100 km</td>
        <td>À l'échelle d'une ville, 4G</td>
      </tr>
      <tr>
        <td>WAN</td>
        <td>1000 km</td>
        <td>Réseau d'un opérateur, Internet</td>
      </tr>
    </table>

    <h2>Topologies des réseaux</h2>
    <table class="all-border">
      <tr>
        <th>Topologie</th>
        <th>Schéma</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td>Point à point</td>
        <td>
          <img
            src="/network/medias/topologie_point_a_point.png"
            alt="Point à point"
            width="200"
          />
        </td>
        <td>- VPN<br />- Client/serveur<br />- Téléphone</td>
      </tr>
      <tr>
        <td>Bus</td>
        <td>
          <img src="/network/medias/topologie_bus.png" alt="Bus" width="200" />
        </td>
        <td>- Cluster MP<br />- Alarme</td>
      </tr>
      <tr>
        <td>Étoile</td>
        <td>
          <img
            src="/network/medias/topologie_etoile.png"
            alt="Étoile"
            width="200"
          />
        </td>
        <td>- IT<br />- Réseaux de paiement</td>
      </tr>
      <tr>
        <td>Anneau</td>
        <td>
          <img
            src="/network/medias/topologie_anneau.png"
            alt="Anneau"
            width="200"
          />
        </td>
        <td>- FDDI<br />- Backbone</td>
      </tr>
      <tr>
        <td>Maillée</td>
        <td>
          <img
            src="/network/medias/topologie_maillee.png"
            alt="Maillée"
            width="200"
          />
        </td>
        <td>- Internet</td>
      </tr>
      <tr>
        <td colspan="3" class="text-center">
          --- Ceci n'est pas une topologie de base ---
        </td>
      </tr>
      <tr>
        <td>Mixte</td>
        <td>
          <img
            src="/network/medias/topologie_mixte_tree.png"
            alt="Tree"
            width="200"
          />
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.all-border {
  @apply border;
}
.all-border td {
  @apply border;
}
.all-border td:first-child {
  @apply text-center;
}
</style>
