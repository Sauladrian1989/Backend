<?php 

$str = file_get_contents('data-1.json');
$json = json_decode($str, true);
echo json_encode($json);



?>