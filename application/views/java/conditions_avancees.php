<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Les conditions avancées</h1>

<h3>Le switch</h3>
<p>Le bloc switch permet de simplifier un code où on utiliserait plusieurs else if à la suite. Exemple :</p>
<table class="table">
	<thead>
		<tr>
			<th>If else if</th>
			<th>Switch</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre><code class="language-java">if (maVar == 0) {
	//Code si = à 0
} else if (maVar == 1) {
	//Code si = à 1
} else if (maVar == 2) {
	//Code si = à 2
} else {
	//Code sinon
}</code></pre>
			</td>
			<td>
				<pre><code class="language-java">switch (maVar) {
	case 0:
		//Code si = à 0
		break;
	case 1:
		//Code si = à 1
		break;
	case 2:
		//Code si = à 2
		break;
	default:
		//Code sinon
}</code></pre>
			</td>
		</tr>
	</tbody>
</table>
<p>Le break est très important : il sert à sortir du switch si la condition est remplie. Si vous l'oubliez alors votre switch exécutera la condition plus toutes celles qui se trouve après.</p>