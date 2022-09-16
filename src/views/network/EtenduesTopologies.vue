<template>
  <div>
    <h1>Étendues et topologies des réseaux</h1>
    <h3>Étendues des réseaux</h3>
    <table class="table table-responsive">
      <tr>
        <th>Étendu</th>
        <th>Distance max</th>
        <th>Exemples</th>
      </tr>
      <tr>
        <td>PAN</td>
        <td>1 m</td>
        <td>Bluetooth, Infrarouge</td>
      </tr>
      <tr>
        <td>LAN</td>
        <td>1 km</td>
        <td>Réseau local, Wifi</td>
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

    <h3>Topologies des réseaux</h3>
    <table class="table table-responsive">
      <tr>
        <th>Topologie</th>
        <th>Schéma</th>
        <th>Exemple</th>
      </tr>
      <tr>
        <td>Point à point</td>
        <td>
          <img
            src="/medias/network/topologie_point_a_point.png"
            alt="Point à point"
            style="max-width: 200px"
          />
        </td>
        <td>- VPN<br />- Client/serveur<br />- Téléphone</td>
      </tr>
      <tr>
        <td>Bus</td>
        <td>
          <img
            src="/medias/network/topologie_bus.png"
            alt="Bus"
            style="max-width: 200px"
          />
        </td>
        <td>- Cluster MP<br />- Alarme</td>
      </tr>
      <tr>
        <td>Étoile</td>
        <td>
          <img
            src="/medias/network/topologie_etoile.png"
            alt="Étoile"
            style="max-width: 200px"
          />
        </td>
        <td>- IT<br />- Réseaux de payement</td>
      </tr>
      <tr>
        <td>Anneau</td>
        <td>
          <img
            src="/medias/network/topologie_anneau.png"
            alt="Anneau"
            style="max-width: 200px"
          />
        </td>
        <td>- FDDI<br />- Backbone</td>
      </tr>
      <tr>
        <td>Maillée</td>
        <td>
          <img
            src="/medias/network/topologie_maillee.png"
            alt="Maillée"
            style="max-width: 200px"
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
            src="/medias/network/topologie_mixte_tree.png"
            alt="Tree"
            style="max-width: 200px"
          />
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "EtenduesTopologies",
};
</script>
