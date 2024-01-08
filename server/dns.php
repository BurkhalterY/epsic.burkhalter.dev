<?php
	$title = 'Les DNS';
	include 'header.php';
?>
	<h1>Les DNS</h1>
	<p>Les DNS (pour Domain Name System) est un service qui traduit les noms de domaine en adresses IP.</p>
	<p>Pour comprendre le fonctionnement des DNS, il faut voir comment se forme un nom de domaine. Prenons par exemple le domaine www.epsic.ch<br>Il est constitué de :</p>
	<ul>
		<li>ch → tld (Top level domain)</li>
		<li>epsic → domaine</li>
		<li>www → hôte</li>
	</ul>
	<p>Les points étant le séparateur.</p>
	<p>La combinaison du domaine et du tld forme le suffixe DNS</p>
	<p>La combinaison de l'hote et du suffixe DNS forme un FQDN (Fully Qualified Domain Name (Nom de domaine pleinement qualifié))</p>

	<h3>La requête DNS</h3>
	<p>Quand vous entrez l'adresse d'un site dans la barre d'adresse, le navigateur va envoyer une requête aux serveurs pour connaître l'IP du site en question et pouvoir s'y connecté.</p>
	<p>Déroulement de la requête :</p>
	<ul>
		<li>Le client check dans son cache s'il ne connait pas déjà le site</li>
		<li>Si le client ne connait pas le site, il demande au serveur DNS de son FAI (Fournisseur d'accès Internet)</li>
		<li>Si le serveur du FAI ne connait pas le site, il demande à un serveur tld</li>
		<li>Si le serveur tld ne connait pas le site, il demande à l'un des 13 serveurs root mondiaux qui ne connaissent pas les sites, mais connaissent tous les serveurs tld. Il redirige donc sur l'un des serveur tld correspondant au tld</li>
		<li>Le serveur tld renvoie l'IP du site</li>
	</ul>
	<p>Il existe deux modes : le mode récursif et le mode itératif.</p>
	<p>Mode récursif : Le PC passe par un serveur DNS et ne se préoccupe pas des actions effectuées par ce dernier pour recevoir la réponse.<br>Mode itératif : Le PC passe par tous les serveurs DNS lui-même.</p>

	<h3>Les types d'enregistrements</h3>
	<p>Certains domaines possèdent plusieurs services différent (site web, email, etc...).<br>Le serveur DNS va alors rediriger la requête vers le bon service en se basant sur les enregistrement DNS pour le domaine.</p>
	<table class="table">
		<tr>
			<th>Type</th>
			<th>Explication</th>
		</tr>
		<tr>
			<td>A</td>
			<td>IPv4 d'un hôte</td>
		</tr>
		<tr>
			<td>AAAA</td>
			<td>IPv6 d'un hôte</td>
		</tr>
		<tr>
			<td>CNAME (Canonical NAME)</td>
			<td>Permettent de créer des alias, c.-à-d. d'associer plusieurs noms d'hôtes à une seule machine</td>
		</tr>
		<tr>
			<td>MX (Mail exchange record)</td>
			<td>FQDN d'un serveur SMTP (mails)</td>
		</tr>
		<tr>
			<td>SOA (Server of authority)</td>
			<td>Nom d'hôte du serveur qui héberge la zone DNS principale (une seule SOA par zone)</td>
		</tr>
		<tr>
			<td>NS (Name server)</td>
			<td>Permet de définir plusieurs serveur de nom</td>
		</tr>
	</table>
<?php include 'footer.php'; ?>