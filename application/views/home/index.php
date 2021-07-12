<link rel="stylesheet" href="<?=base_url('assets/css/home.css')?>" />
<script src="<?=base_url('assets/js/jquery-3.3.1.slim.min.js')?>"></script>
<script src="<?=base_url('assets/js/popper.min.js')?>"></script>
<script src="<?=base_url('assets/js/bootstrap.min.js')?>"></script>
<br>
<div class="container">
	<h1 class="text-uppercase text-center">epsic.burkhalter.dev</h1>
	<p>Bonjour, bienvenue sur mon site. Ici j'essaie de retranscrire et de réexpliquer les modules que nous voyons aux cours. Vous pouvez aussi poser vos questions en rejoigant le serveur Discord, ou y apporter vos idées d'amélioration. Je suis ouvert à toutes les questions donc n'hésitez pas. Il est également possible que je commette des erreurs, merci de me les signaler si vous en voyez. Le site ne contient pour le moment que certains modules de première année. Sur-ce, révisez bien 😃</p>
	<div class="row">
		<div class="col-md-4">
			<a href="<?=base_url('access')?>">
				<img src="<?=base_url('medias/access/access.png')?>" alt="Module 100" width="75%" class="link" />
				<figcaption>Module 100 : Access</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('html')?>">
				<img src="<?=base_url('medias/html/html.png')?>" alt="CIE 101" width="75%" class="link" />
				<figcaption>CIE 101 : HTML, CSS, JavaScript</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('bdd')?>">
				<img src="<?=base_url('medias/bdd/bdd.png')?>" alt="Module 104" width="75%" class="link" />
				<figcaption>Module 104 : Python et SQL</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('bin')?>">
				<img src="<?=base_url('medias/bin/bin.png')?>" alt="Module 114" width="75%" class="link" />
				<figcaption>Module 114 : Binaire</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('network')?>">
				<img src="<?=base_url('medias/network/network.png')?>" alt="Module 117" width="75%" class="link" />
				<figcaption>Module 117 : Réseau</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('server')?>">
				<img src="<?=base_url('medias/server/server.png')?>" alt="Module 123" width="75%" class="link" />
				<figcaption>Module 123 : Windows Server</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('java')?>">
				<img src="<?=base_url('medias/java/java.png')?>" alt="Module 403" width="75%" class="link" />
				<figcaption>Module 403 : Java</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="<?=base_url('poo')?>">
				<img src="<?=base_url('medias/poo/poo.png')?>" alt="Module 404" width="75%" class="link" />
				<figcaption>Module 404 : Java (POO)</figcaption>
			</a>
			<br>
		</div>
		<div class="col-md-4">
			<a href="" data-toggle="modal" data-target="#modal">
				<img src="<?=base_url('medias/home/cursor.png')?>" alt="Liens utiles" width="75%" class="link" />
				<figcaption>Liens utiles</figcaption>
			</a>
			<br>
			<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="Liens utiles" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">Liens utiles</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<ul>
								<li class="icon-moodle"><a href="https://www.epsic.ch/secure/moodle/" target="_blank">Moodle de l'EPSIC</a></li>
								<li class="icon-moodle"><a href="https://ict-moodle.ch/" target="_blank">Moodle exclusif aux CIE</a></li>
								<li class="icon-discord"><a href="https://discord.gg/ry3XrTPUzQ" target="_blank">Mon serveur Discord (Normalux)</a></li>
								<li class="icon-discord"><a href="https://discord.gg/NejUt35yur" target="_blank">Serveur Discord de L'ELITE 2.0</a></li>
								<li class="icon-trash"><a href="https://epsic.jacktrash.ch/" target="_blank">Site de JackTrash</a></li>
								<li class="icon-hyperplanning"><a href="https://www.portail.vd.ch/formation/hyperplanning/epsic/invite" target="_blank">Horaires EPSIC</a></li>
							</ul>
						</div>
						<div class="modal-footer"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-6 offset-lg-6">
			<h4>Fil d'actualité</h4>
			<iframe src="<?=base_url('home/actualite')?>" width="100%" height="200px" frameBorder="0"></iframe>
		</div>
	</div>
</div>