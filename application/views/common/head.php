<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html>
	<head>
		<title><?=$title?></title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<meta name="description" content="<?=$description?>" />
		<link rel="stylesheet" href="<?=base_url('assets/css/bootstrap.min.css')?>" />
		<link rel="icon" href="<?=base_url('assets/favicon/'.$dir.'.ico')?>" />

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-S0S5QEJLMW"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-S0S5QEJLMW');
		</script>
	</head>
	<body>