<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("UPDATE Zamowienia SET klient_id=?, data_zamowienia=?, kwota_calkowita=?, status=? WHERE zamowienie_id=?");
$result = $stmt->execute([$data->klient_id, $data->data_zamowienia, $data->kwota_calkowita, $data->status, $data->zamowienie_id]);
echo $result ? json_encode(["status" => "success"]) : json_encode(["status" => "error"]);
?>