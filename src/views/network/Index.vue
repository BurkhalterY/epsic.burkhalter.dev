<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li>
        <router-link to="/network/materiel">Équipements réseaux</router-link>
      </li>
      <li>
        <router-link to="/network/etendues_topologies"
          >Étendues et topologies des réseaux</router-link
        >
      </li>
      <li><router-link to="/network/modele_osi">Modèle OSI</router-link></li>
      <li>
        <router-link to="/network/supports_transmission"
          >Les supports de transmission</router-link
        >
      </li>
      <li>
        <router-link to="/network/classes_ip"
          >Les classes d'adresses IP</router-link
        >
      </li>
      <li>
        <router-link to="/network/structure_ip"
          >Structure d'une adresse IP</router-link
        >
      </li>
      <li>
        <router-link to="/network/calcul_sous_reseaux"
          >Calculer les sous-réseaux</router-link
        >
      </li>
      <li>
        <router-link to="/network/design_ethernet"
          >Design Ethernet (Projet Mediatis)</router-link
        >
      </li>
      <br />
      <li>
        <router-link to="/network/calculateur_sr"
          >Calculateur de sous-réseaux</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
}
</script>
