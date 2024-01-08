<?php
	$title = 'Conversion d\'un for en while et inversement';
	include 'header.php';
?>
	<h1>Conversion d'un for en while et inversement</h1>
	<p>Voici deux codes qui font exactement la même chose :</p>
	<table class="table">
		<thead>
			<tr>
				<th>Boucle for</th>
				<th>Boucle while</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><pre><code class="language-java">for (int i = 0; i &lt; 10; i++) {
	
	//Mon code

}</code><br></pre></td>
				<td><pre><code class="language-java">int i = 0;

while (i &lt; 10) {
	
	//Mon code
	
	i++;
}</code></pre></td>
			</tr>
		</tbody>
	</table>
<?php include 'footer.php'; ?>