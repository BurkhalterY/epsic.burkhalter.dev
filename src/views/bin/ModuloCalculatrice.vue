<template>
	<div>
		<h1>Comment effectuer l'opératin modulo sur la calculatrice ?</h1>
		<h3>Sur la TI-30X Pro</h3>
		<div class="row">
			<div class="col-lg-4">
				<video src="/medias/bin/mod_ti-30x.mp4" controls style="max-height: 600px;" />
			</div>
			<div class="col-lg-8">
				<ul class="mt-5">
					<li>Touche <kbd>math</kbd></li>
					<li>Avec les flèches, se rendre dans <code>NUM</code> puis <code>8:mod(</code> (le dernier)</li>
					<li>Valider avec <kbd>enter</kbd></li>
					<li>Saisir le nombre à diviser</li>
					<li><kbd>2nd</kbd> + <kbd>.</kbd> pour insérer une virgule (comme pour les paramètres d'une fonction)</li>
					<li>Saisir le diviseur</li>
					<li><kbd>enter</kbd> : la calculatrice affiche le reste</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ModuloCalculatrice',
	}
</script>
