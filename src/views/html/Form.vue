<template>
	<div>
		<h1>Les formulaires</h1>
		<p>Les formulaires servent souvent à communiquer avec un backend. Ils peuvent aussi être utilisé avec le JavaScript comme champ d'entrée pour les calculs. Sur cette page, nous n'allons voir ni l'une, ni l'autre des méthodes. Car nous n'avons pas de backend si l'on fait un site statique en HTML et parce que le JavaScript fera l'objet de la 3ème partie du module.</p>
		<p>Voici un exemple de formulaire avec quelques champs</p>
		<div class="row">
			<div class="col-md-6">
				<pre class="language-html"><ShowCode file="html/form.html" lang="html"/></pre>
			</div>
			<div class="col-md-6 text-center">
				<br>
				<form action="login_form.php" method="POST">
					<label for="username">Nom d'utilisateur :&nbsp;</label>
					<input type="text" name="username" id="username"><br>
					<label for="password">Mot de passe :&nbsp;</label>
					<input type="password" name="password" id="password"><br>
					<input type="submit" value="Envoyer">
				</form>
			</div>
		</div>
		<p>Regardons tout cela de plus près :</p>
		<ul>
			<li>Les champs doivent se trouver dans une balise <ShowCode inlineCode="<form>" lang="html"/>.</li>
			<li>La balise <ShowCode inlineCode="<form>" lang="html"/> a deux attributs :</li>
			<ul>
				<li><code>action</code> va être la page sur laquelle envoyer la requête.</li>
				<li><code>method</code> va être le verbe HTTP utilisé (GET ou POST). Dans ce cours on va principalement utiliser GET puisque nous n'avons pas de backend.</li>
				<ul>
					<li>GET va passer les champs dans l'URL.</li>
					<li>POST les passe dans la requête HTTP et nécessite donc un serveur backend pour les récupérer (ex: PHP).</li>
				</ul>
			</ul>
			<li>Les champs sont définis par la balise <ShowCode inlineCode="<input>" lang="html"/> qui prend aussi deux attributs :</li>
			<ul>
				<li><code>type</code> est le type de champs. Valeurs possibles : <code>text</code>, <code>password</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>, etc...</li>
				<li><code>name</code> qui permet de récupérer la valeur du formulaire dans le backend ou le JavaScript.</li>
			</ul>
			<li>Les noms affichés des champs doivent se trouver dans une balise <ShowCode inlineCode="<label>" lang="html"/> qui a un attribut :</li>
			<ul>
				<li><code>for</code> "lie" le label au champ. Principalement pour qu'un clic sur le label permette directement de modifier le champ (essayez-par vous-même 😉). Pour que cela fonctionne, il faut avoir ajouté un attribut <code>id</code> au champ. En effet, l'attribut <code>for</code> se réfère à un id et non au name. Mettre la même valeur suffira.</li>
			</ul>
			<li>⚠ les champs comme les labels sont des balises de type <router-link to="/html/types_balises">inline</router-link>. Si vous ne les forcé pas (par exemple avec un <ShowCode inlineCode="<br>" lang="html"/>), elles se mettront toute sur une ligne.</li>
			<li>Les boutons d'envoie ne sont en fait que des balises <ShowCode inlineCode="<input>" lang="html"/> avec le type submit. Leur attribut <code>value</code> permet de modifier le texte de leur bouton.</li>
			<ul>
				<li>Il existe aussi un bouton de type <code>reset</code> qui vide entièrement le formulaire.</li>
			</ul>
		</ul>

		<h2>Liste déroulante</h2>
		<p>La balise <ShowCode inlineCode="<input>" lang="html"/> ne permet pas de créer de liste déroulante. À la place, nous utiliserons <ShowCode inlineCode="<select>" lang="html"/> et <ShowCode inlineCode="<option>" lang="html"/> :</p>
		<div class="row">
			<div class="col-md-6">
				<pre class="language-html"><ShowCode file="html/select.html" lang="html"/></pre>
			</div>
			<div class="col-md-6 text-center">
				<br>
				<select name="character" id="character">
					<option>Mario</option>
					<option>Luigi</option>
					<option>Wario</option>
					<option>Waluigi</option>
				</select>
			</div>
		</div>
		<p>⚠ J'ai ici omis la balise <ShowCode inlineCode="<form>" lang="html"/> pour des raisons de visibilités mais ne l'oubliez pas.</p>
		<p>Il y a vraiment énormément d'attributs en HTML. Il m'est difficile de tous les présenter au risque de donner trop d'informations. Le mieux est que vous cherchiez par vous-même lorsque vous avez besoin de quelque chose en particulier (je recommande <a href="https://www.w3schools.com/" target="_blank">W3Schools</a> pour l'HTML).</p>
	</div>
</template>

<script>
	import ShowCode from '../../components/ShowCode.vue'

	export default {
		name: 'Form',
		components: {
			ShowCode,
		},
	}
</script>
