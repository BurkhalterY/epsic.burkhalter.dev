<!DOCTYPE html>
<html>
	<head>
		<title>Statistiques</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
		<meta name="description" content="Statistiques" />
	</head>
	<body>
		<svg width="1280" height="720">
			<?php
				include 'database.php';
				$sections = array('bin' => 'green',
								  'java' => 'magenta',
								  'poo' => 'yellow',
								  'access' => 'red',
								  'bdd' => 'lightgreen',
								  'network' => 'blue',
								  'server' => 'cyan',
								  'forum' => 'orange',
								  '' => 'black'
								);
				if(isset($_GET['d'])) {
					$nb_days = $_GET['d'];
				} else {
					$nb_days = 32;
				}
				if(isset($_GET['m'])) {
					$max_vis = $_GET['m'];
				} else {
					$max_vis = 30;
				}
				$w = round(1280 / $nb_days);
				$h = round(720 / $max_vis);
				foreach ($sections as $section => $value) {
					$svgPoints = '';
					for($i = 0; $i <= $nb_days; $i++){
						$stats = mysqli_prepare($bdd, 'SELECT COUNT(DISTINCT IP) FROM t_connections WHERE URL LIKE ? AND TO_DAYS(Connection_time) > TO_DAYS(DATE_SUB(current_timestamp, INTERVAL ? DAY)) AND TO_DAYS(Connection_time) <= TO_DAYS(DATE_SUB(current_timestamp, INTERVAL ? DAY))');
						$url = '/'.$section.'%';
						$j = $i+1;
						mysqli_stmt_bind_param($stats, 'sii', $url, $j, $i);
						mysqli_stmt_execute($stats);
						mysqli_stmt_bind_result($stats, $ni);
						mysqli_stmt_fetch($stats);
						$svgPoints .= ($nb_days-$i)*$w . ', ' . ($max_vis-$ni)*$h . ' ';
						unset($stats);
					}
				?>
				<polyline points="<?=$svgPoints;?>" stroke="<?=$value;?>" stroke-width="5" fill="none " stroke-linejoin="round" />
			<?php }
				for($i = 1; $i <= $max_vis; $i++){
					echo '<line x1="0" y1="'.($i*$h).'" x2="1280" y2="'.($i*$h).'" style="stroke: black;" />';
					echo '<text x="0" y="'.(($max_vis-$i)*$h).'">'.$i.'</text>';
				}
				for($i = 1; $i <= $nb_days; $i++){
					echo '<line x1="'.($i*$w).'" y1="0" x2="'.($i*$w).'" y2="720" style="stroke: black;" />';
					echo '<text x="'.($i*$w).'" y="715">-'.($nb_days-$i).' j</text>';
				}
			?>
		</svg>
		<p style="float: right;">
			<span style="color: red;">█</span> : Module 100 - Access<br>
			<span style="color: lightgreen;">█</span> : Module 104 - BDD & Python<br>
			<span style="color: green;">█</span> : Module 114 - Binaire<br>
			<span style="color: blue;">█</span> : Module 117 - Réseau<br>
			<span style="color: cyan;">█</span> : Module 123 - Windows Server<br>
			<span style="color: magenta;">█</span> : Module 403 - Java<br>
			<span style="color: yellow;">█</span> : Module 404 - Java (POO)<br>
			<span style="color: orange;">█</span> : Forum des questions<br>
			<span style="color: black;">█</span> : *
		</p>
	</body>
</html>
<?php
	$req = mysqli_prepare($bdd, 'INSERT INTO t_connections (IP, URL) VALUES (?, ?)');
	mysqli_stmt_bind_param($req, "ss", $_SERVER['REMOTE_ADDR'], $_SERVER['PHP_SELF']);
	mysqli_stmt_execute($req);
?>