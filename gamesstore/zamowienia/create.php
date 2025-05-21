<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("INSERT INTO Zamowienia (klient_id, data_zamowienia, kwota_calkowita, status) VALUES (?, ?, ?, ?)");
$result = $stmt->execute([$data->klient_id, $data->data_zamowienia, $data->kwota_calkowita, $data->status]);
echo $result ? json_encode(["status" => "success", "id" => $pdo->lastInsertId()]) : json_encode(["status" => "error"]);
?>