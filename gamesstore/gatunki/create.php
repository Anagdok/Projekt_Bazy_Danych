<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("INSERT INTO Gatunki (nazwa) VALUES (?)");
$result = $stmt->execute([$data->nazwa]);
echo $result ? json_encode(["status" => "success", "id" => $pdo->lastInsertId()]) : json_encode(["status" => "error"]);
?>