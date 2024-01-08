<!DOCTYPE html>
<html>
	<head>
		<title>Forum - <?php if(isset($title)){ echo $title; } ?></title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
		<meta name="description" content="Forum de questions." />
		<link rel="stylesheet" href="themes/bootstrap.min.css" id="stylesheet1" />
		<link rel="stylesheet" href="themes/style.css" id="stylesheet2" />
		<link rel="icon" href="favicon.ico" />
		<script src="themes/darkmode.js"></script>
	</head>
	<body>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item"><a class="nav-link" href="<?php if($_SERVER['PHP_SELF']=='/forum/index.php'){echo '..';}else{echo 'index.php';}?>">Menu</a></li>
				<!--<li style="margin-left: 6px;"><button type="button" class="btn btn-primary" onclick="changeStylesheet((parseInt(getCookie('darkmode'))+1)%2)">Darkmode</button></li>-->
			</ul>
			<span class="navbar-text">© Burkhalter Yannis</span>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col-md-12">