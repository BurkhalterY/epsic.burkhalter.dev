<template>
	<div>
		<nav class="navbar navbar-expand navbar-light bg-light">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item"><router-link class="nav-link" to="/">Accueil</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/lang">Menu</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/lang/fr">🇫🇷</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/lang/ja">🇯🇵</router-link></li>
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

<script>
	export default {
		name: 'Base',
	}
</script>
