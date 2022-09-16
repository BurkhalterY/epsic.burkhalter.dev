<template>
	<div>
		<nav class="navbar navbar-expand">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item"><router-link class="nav-link" to="/">Accueil</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/bdd">Menu</router-link></li>
			</ul>
			<span class="navbar-text">© Burkhalter Yannis</span>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.navbar {
		background-color: #A4383B;
		color: white;
		padding: 0;
		margin-bottom: 20px;
	}

	.navbar ul, .navbar span {
		background-color: #832C2E;
		margin: 0;
		padding-left: 5px;
		padding-right: 5px;
	}

	.navbar a {
		color: white;
	}
</style>

<script>
	export default {
		name: 'Base',
	}
</script>
