<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("INSERT INTO Klienci (imie, nazwisko, email, telefon, adres, data_rejestracji) VALUES (?, ?, ?, ?, ?, ?)");
$result = $stmt->execute([$data->imie, $data->nazwisko, $data->email, $data->telefon, $data->adres, $data->data_rejestracji]);
echo $result ? json_encode(["status" => "success", "id" => $pdo->lastInsertId()]) : json_encode(["status" => "error"]);
?>