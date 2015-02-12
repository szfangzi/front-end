<?php
	$url='http://data.bank.hexun.com/ll/rmbhl.aspx';
	$html = file_get_contents($url);
	echo $html;
?>