<template>
	<div>
		<h1>Les tables</h1>
		<p>Il y a 2 types de tables :</p>
		<ul>
			<li>Les tables de données</li>
			<li>Les tables d'association</li>
		</ul>

		<h3>Les tables de données</h3>
		<p>Les tables de données servent à contenir certain types de données bien distincts (exemples: Personnes, Voitures, etc.).</p>
		<hr>
		<div class="row">
			<div class="col-md-6">
				<p>Structure de la table T_Personnes :</p>
				<img src="/medias/access/t_personnes.png" alt="T_Personnes" />
			</div>
			<div class="col-md-6">
				<p>Structure de la table T_Voitures :</p>
				<img src="/medias/access/t_voitures.png" alt="T_Voitures" />
			</div>
		</div>
		<br>

		<h3>Les tables d'association</h3>
		<p>Les tables d'association servent à faire une association entre 2 tables de données (exemples: Personne_avoir_Voiture).</p>
		<hr>
		<p>Structure de la table T_Avoir_Voiture :</p>
		<img src="/medias/access/t_avoir_voiture.png" alt="T_Avoir_Voiture" />
	</div>
</template>

<script>
	export default {
		name: 'Tables',
	}
</script>
