<!DOCTYPE html>
<html>
	<head>
		<title>Module 104 - <?php if(isset($title)){ echo $title; } ?></title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
		<meta name="description" content="Module 104, créer une &quot;vrai&quot; base de données." />
		<link rel="stylesheet" href="themes/bootstrap.min.css" />
		<link rel="stylesheet" href="themes/prism.css" />
		<link rel="stylesheet" href="themes/my_style.css" />
		<link rel="icon" href="favicon.ico" />
	</head>
	<body>
		<script src="themes/prism.js"></script>
		<nav class="navbar navbar-expand-lg">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item"><a class="nav-link" href="<?php if($_SERVER['PHP_SELF']=='/bdd/index.php'){echo '..';}else{echo 'index.php';}?>">Menu</a></li>
			</ul>
			<span class="navbar-text">© Burkhalter Yannis</span>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col-md-12">