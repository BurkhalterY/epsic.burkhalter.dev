<script setup></script>

<template>
  <div>
    <nav class="navbar navbar-expand">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/access">Menu</router-link>
        </li>
      </ul>
      <span class="navbar-text">&copy; Burkhalter Yannis</span>
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
