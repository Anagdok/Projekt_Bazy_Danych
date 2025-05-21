<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("UPDATE Klienci SET imie=?, nazwisko=?, email=?, telefon=?, adres=?, data_rejestracji=? WHERE klient_id=?");
$result = $stmt->execute([$data->imie, $data->nazwisko, $data->email, $data->telefon, $data->adres, $data->data_rejestracji, $data->klient_id]);
echo $result ? json_encode(["status" => "success"]) : json_encode(["status" => "error"]);
?>