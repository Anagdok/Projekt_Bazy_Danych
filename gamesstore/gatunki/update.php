<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("UPDATE Gatunki SET nazwa=? WHERE gatunek_id=?");
$result = $stmt->execute([$data->nazwa, $data->gatunek_id]);
echo $result ? json_encode(["status" => "success"]) : json_encode(["status" => "error"]);
?>