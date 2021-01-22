<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<h1>L'Active Directory (AD)</h1>
<p>L'AD est un annuaire qui contient toute sorte d'objets comme des utilisateurs, des machines, des groupes, etc...</p>
<p>Le protocole pour l'administrer est LDAP.</p>
<p>Le protocole pour authentifier des sessions est Kerberos (attention : il ne doit pas avoir plus de 5 minutes de décalage entre l'heure de la machine et l'heure du serveur).</p>
<p>L'Active Directory est un produit Microsoft, il existe d'autres annuaires fonctionnant avec LDAP :</p>
<ul>
	<li>Open Directory – Apple</li>
	<li>Open LDAP – Linux</li>
	<li>Directory Server – Synology</li>
	<li>LDAP Server – QNAP</li>
</ul>

<h3>Les types d'objets</h3>
<ul>
	<li>Utilisateurs et ordinateurs</li>
	<li>Groupes</li>
	<li>Unité d'organisation (UO / OU)</li>
	<li>Ressources (imprimantes / applications)</li>
</ul>
<p><strong>Les comptes utilisateurs</strong> possède un identifiant et un mot de passe pour pouvoir s'authentifier sur le domaine.</p>
<p><strong>Les groupes</strong> permettent de regrouper des comptes utilisateurs ou ordinateurs (ou les deux) afin de gérer les droits plus simplement.</p>
<p><strong>Les unité d'organisation</strong> servent principalement à rendre l'administration des comptes plus faciles. Ils peuvent contenir tous types d'objet.</p>

<h3>Arborescence</h3>
<ul>
	<li>Une forêt contient un ou plusieurs arbres</li>
	<li>Un arbre contient un ou plusieurs domaines</li>
	<li>Un domaine contient une ou plusieurs UO</li>
	<li>Une UO contient un ou plusieurs objets</li>
</ul>
<img src="<?=base_url('medias/server/arborescence.png')?>" alt="Arborescence" style="max-width: 100%;" />
<p>Les triangles bleus et oranges sont des domaines.<br>Un ensemble de triangle est un arbre et un ensemble d'arbre est une forêt.</p>