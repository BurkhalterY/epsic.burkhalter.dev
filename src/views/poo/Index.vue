<template>
  <div>
    <h1>Plan du site</h1>
    <ul>
      <li><router-link to="/poo/objet">Qu'est-ce qu'un objet</router-link></li>
      <li>
        <router-link to="/poo/constructeur">Les constructeurs</router-link>
      </li>
      <li>
        <router-link to="/poo/encapsulation">L'encapsulation</router-link>
      </li>
      <li><router-link to="/poo/heritage">L'héritage</router-link></li>
      <li>
        <router-link to="/poo/polymorphisme">Le polymorphisme</router-link>
      </li>
      <li>
        <router-link to="/poo/classes_abstraites"
          >Les classes abstraites</router-link
        >
      </li>
      <li><router-link to="/poo/interfaces">Les interfaces</router-link></li>
    </ul>
    <h4>GUI</h4>
    <ul>
      <li><router-link to="/poo/fenetre">Première fenêtre</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Heritage",
}
</script>
