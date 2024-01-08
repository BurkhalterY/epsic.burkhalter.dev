<!DOCTYPE html>
<html>
	<head>
		<title>Accueil</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
		<meta name="description" content="Page d'accueil" />
		<link rel="stylesheet" href="bootstrap.min.css" />
		<link rel="icon" href="favicon.ico" />
		<style>
			a {
				text-align: center;
			}
			.link {
				display: block;
				margin-left: auto;
				margin-right: auto;
				border: 5px solid black;
				border-radius: 10px;
			}
			.stats {
				padding: 10px;
				position: absolute;
				top: 10px;
				right: 10px;
				background-color: lightgray;
				opacity: 0.75;
			}
		</style>
	</head>
	<body>
		<br>
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<a href="network">
						<img src="network/medias/network.png" alt="Module 117" width="75%" class="link" />
						<figcaption>Module 117 - Réseau</figcaption>
					</a>
					<br>
				</div>
				<div class="col-md-3">
					<a href="java">
						<img src="java/medias/java.png" alt="Module 403" width="75%" class="link" />
						<figcaption>Module 403 - Java</figcaption>
					</a>
					<br>
				</div>
				<div class="col-md-3">
					<a href="access">
						<img src="access/medias/access.png" alt="Module 100" width="75%" class="link" />
						<figcaption>Module 100 - Access (Maccaud)</figcaption>
					</a>
					<br>
				</div>
				<div class="col-md-3">
					<a href="bin">
						<img src="bin/medias/bin.png" alt="Module 114" width="75%" class="link" />
						<figcaption>Module 114 - Binaire</figcaption>
					</a>
					<br>
				</div>
			</div>
		</div>
		<!-- Touche pas au code source, idiot -->
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<a href="server">
						<img src="server/medias/server.png" alt="Module 123" width="75%" class="link" />
						<figcaption>Module 123 - Windows Server</figcaption>
					</a>
					<br>
				</div>
				<div class="col-md-3">
					<a href="poo">
						<img src="poo/medias/poo.png" alt="Module 404" width="75%" class="link" />
						<figcaption>Module 404 - Java (POO)</figcaption>
					</a>
					<br>
				</div>
				<div class="col-md-3">
					<a href="bdd">
						<img src="bdd/medias/bdd.png" alt="Module 104" width="75%" class="link" />
						<figcaption>Module 104</figcaption>
					</a>
					<br>
				</div>
				<div class="col-md-3">
					<a href="forum">
						<img src="forum/medias/forum.png" alt="Forum" width="75%" class="link" />
						<figcaption>Forum des questions</figcaption>
					</a>
					<br>
				</div>
			</div>
		</div>
		<?php
			include 'database.php';
			$req = mysqli_prepare($bdd, 'INSERT INTO t_connections (IP, URL) VALUES (?, ?)');
			mysqli_stmt_bind_param($req, "ss", $_SERVER['REMOTE_ADDR'], $_SERVER['PHP_SELF']);
			mysqli_stmt_execute($req);
			
			$res1 = mysqli_query($bdd, 'SELECT COUNT(DISTINCT IP) FROM t_connections WHERE Connection_time >= DATE_SUB(current_timestamp, INTERVAL 5 MINUTE)');
			$data1 = mysqli_fetch_assoc($res1);
			mysqli_free_result($res1);
			
			$res2 = mysqli_query($bdd, 'SELECT COUNT(DISTINCT IP) FROM t_connections WHERE Connection_time >= DATE_SUB(current_timestamp, INTERVAL 1 DAY)');
			$data2 = mysqli_fetch_assoc($res2);
			mysqli_free_result($res2);
		?>
		<div class="stats">
			<p>Nombre de visiteurs en ligne : <?php echo $data1['COUNT(DISTINCT IP)'] ; ?></p>
			<p>Nombre de visiteurs aujourd'hui : <?php echo $data2['COUNT(DISTINCT IP)'] ; ?></p>
		</div>
	</body>
</html>