<?php
	$title = 'Symboles Nassi-Shneidermann';
	include 'header.php';
?>
	<h1>Symboles Nassi-Shneidermann</h1>
	<p>Une petite liste des symboles Nassi-Shneidermann :</p>
	<table class="table">
		<thead>
			<tr>
				<th>Symbole</th>
				<th>Code</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><img src="medias/nassi-main.png" alt="main" /></td>
				<td><pre><code class="language-java">public static void main(String[] args) {





}</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-instruction.png" alt="instruction" /></td>
				<td><pre><code class="language-java">maVar = 2 + 2;</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-if.png" alt="if" /></td>
				<td><pre><code class="language-java">if (condition) {
	// Code si oui
} else {
	// Code si non
}
</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-switch.png" alt="if" /></td>
				<td><pre><code class="language-java">switch (feu) {
	case "Rouge":
		System.out.println("Arrêter");
		break;
	case "Vert":
		System.out.println("Passer");
		break;
	default
		System.out.println("!!!");
}</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-while.png" alt="while" /></td>
				<td><pre><code class="language-java">while (maVar &lt; 10) {
	// mon code
}</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-do-while.png" alt="dpo while" /></td>
				<td><pre><code class="language-java">do {
	// mon code
} while (maVar &lt; 10);</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-for.png" alt="for" /></td>
				<td><pre><code class="language-java">for (int i = 0; i &lt; 10; i++) {
	// mon code
}</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-methode-appel.png" alt="for" /></td>
				<td><pre><code class="language-java">maMethode();</code></pre></td>
			</tr>
			<tr>
				<td><img src="medias/nassi-methode-declaration.png" alt="for" /></td>
				<td><pre><code class="language-java">public void maMethode() {
	// mon code
	// mon code
	// mon code
	// mon code
}</code></pre><p>Attention : ce code s'écrit en dehors de la fonction main()</p></td>
			</tr>
		</tbody>
	</table>
<?php include 'footer.php'; ?>