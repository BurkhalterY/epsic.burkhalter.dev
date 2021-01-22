<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>Tri à bulle</h1>
<p>L'algorithme du tri à bulle permet de trier un tableau.</p>
<p>On parcourt le tableau et on vérifie que la case d'avant est plus petite que la case d'après, sinon on les inverse.<br>Pour que le tableau soit trier à 100%, il faut répéter l'opération autant de fois qu'il y a de case moins un.</p>
<pre><code class="language-java">public static int[] trier(int[] tableau){
	for(int i = 0; i < tableau.length - 1; i++){
		for(int j = 0; j < tableau.length - 1; j++){

			if(tableau[j] > tableau[j+1]){
				int temp = tableau[j];
				tableau[j] = tableau[j+1];
				tableau[j+1] = temp;
			}
		}
	}

	return tableau;
}</code><br></pre>