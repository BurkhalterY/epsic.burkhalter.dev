<template>
	<div class="container mt-4">
		<h1 class="text-uppercase text-center">epsic<wbr>.burkhalter<wbr>.dev</h1>
		<p class="text-justify">Bonjour, bienvenue sur mon site. Ici j'essaie de retranscrire et de réexpliquer les modules que nous voyons aux cours. Vous pouvez aussi poser vos questions en rejoigant le serveur Discord, ou y apporter vos idées d'amélioration. Je suis ouvert à toutes les questions donc n'hésitez pas. Il est également possible que je commette des erreurs, merci de me les signaler si vous en voyez. Le site ne contient pour le moment que certains modules de première année. Sur ce, révisez bien 😃</p>
		<div class="row">
			<div class="col-md-4">
				<router-link to="/access">
					<img src="/medias/home/access.png" alt="Module 100" class="link" />
					<figcaption>Module 100 : Access</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/html">
					<img src="/medias/home/html.png" alt="CIE 101" class="link" />
					<figcaption>CIE 101 : HTML, CSS, JavaScript</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/bdd">
					<img src="/medias/home/bdd.png" alt="Module 104" class="link" />
					<figcaption>Module 104 : Python et SQL</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/bin">
					<img src="/medias/home/bin.php" onerror="this.src='/medias/home/bin.png'" alt="Module 114" class="link" />
					<figcaption>Module 114 : Binaire</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/network">
					<img src="/medias/home/network.png" alt="Module 117" class="link" />
					<figcaption>Module 117 : Réseau</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/server">
					<img src="/medias/home/server.png" alt="Module 123" class="link" />
					<figcaption>Module 123 : Windows Server</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/java">
					<img src="/medias/home/java.png" alt="Module 403" class="link" />
					<figcaption>Module 403 : Java</figcaption>
				</router-link>
				<br>
			</div>
			<div class="col-md-4">
				<router-link to="/poo">
					<img src="/medias/home/poo.png" alt="Module 404" class="link" />
					<figcaption>Module 404 : Java (POO)</figcaption>
				</router-link>
				<br>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6">
				<h4>Liens utiles</h4>
				<ul>
					<li class="icon-moodle"><a href="https://www.epsic.ch/secure/moodle/" target="_blank">Moodle de l'EPSIC</a></li>
					<li class="icon-moodle"><a href="https://ict-moodle.ch/" target="_blank">Moodle exclusif aux CIE</a></li>
					<li class="icon-discord"><a href="https://discord.gg/ry3XrTPUzQ" target="_blank">Mon serveur Discord (Normalux)</a></li>
					<li class="icon-discord"><a href="https://discord.gg/NejUt35yur" target="_blank">Serveur Discord de L'ELITE 2.0</a></li>
					<li class="icon-trash"><a href="https://epsic.jacktrash.ch/" target="_blank">Site de JackTrash</a></li>
					<li class="icon-hyperplanning"><a href="https://www.portail.vd.ch/formation/hyperplanning/epsic/invite" target="_blank">Horaires EPSIC</a></li>
				</ul>
			</div>
			<div class="col-lg-6">
				<h4>Fil d'actualité</h4>
				<News/>
			</div>
		</div>
	</div>
</template>

<style scoped>
	a {
		text-align: center;
	}

	.link {
		display: block;
		margin-left: auto;
		margin-right: auto;
		border: 5px solid black;
		border-radius: 10px;
		width: 75%;
	}

	li.icon-moodle {
		list-style-image: url('/medias/home/moodle.ico');
	}

	li.icon-discord {
		list-style-image: url('/medias/home/discord.ico');
	}

	li.icon-trash {
		list-style-image: url('/medias/home/trash.ico');
	}

	li.icon-hyperplanning {
		list-style-image: url('/medias/home/hyperplanning.ico');
	}
</style>

<script>
	import News from '../../components/News.vue'

	export default {
		name: 'Index',
		components: {
			News,
		},
	}
</script>
