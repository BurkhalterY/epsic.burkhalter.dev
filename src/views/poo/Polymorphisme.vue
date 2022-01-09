<template>
	<div>
		<h1>Le polymorphisme</h1>
		<p>Le polymorphisme est un terme chelou et barbare mais qui représente en fait quelque chose d'assez simple.</p>
		<p>Nous avons déjà vu l'héritage. Il est bien évidement possible de créer des tableaux d'objets. Par Exemple des tableaux de Personnes. Mais si nous avons plusieurs classes enfants qui héritent de Personne, par exemple Apprenti, Enseignant et Formateur. Nous serions coincés.</p>
		<p>C'est à cela que sert le polymorphisme. Il permet à un objet d'une classe parente à contenir un objet enfant. Et vous n'avez rien besoin de modifier à vos classes pour cela.</p>
		<p>Pour l'exemple, reprenons le même projet que pour <router-link to="/poo/heritage">l'héritage</router-link> : dans la classe principale :</p>
		<pre class="language-java"><ShowCode file="poo/polymorphisme.java" lang="java"/></pre>
		<p>Vous voyez que l'on peut mettre un objet de classe Apprenti dans un objet de type Personne. (Attention, l'inverse n'est pas possible)</p>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Polymorphisme',
		components: {
			ShowCode,
		},
	}
</script>
