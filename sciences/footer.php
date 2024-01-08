				</div>
			</div>
		</div>
	</body>
</html>
<?php
	include '../database.php';
	$req = mysqli_prepare($bdd, 'INSERT INTO t_connections (IP, URL) VALUES (?, ?)');
	mysqli_stmt_bind_param($req, "ss", $_SERVER['REMOTE_ADDR'], $_SERVER['PHP_SELF']);
	mysqli_stmt_execute($req);
?>