<template>
  <div>
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/server">Menu</router-link>
        </li>
      </ul>
      <span class="navbar-text">© Burkhalter Yannis</span>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #0f7ddf;
}

nav a {
  color: white;
}
</style>

<script>
export default {
  name: "Base",
}
</script>
