<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("INSERT INTO Produkty (nazwa, cena, opis, data_wydania, ilosc_w_magazynie) VALUES (?, ?, ?, ?, ?)");
$result = $stmt->execute([$data->nazwa, $data->cena, $data->opis, $data->data_wydania, $data->ilosc_w_magazynie]);
echo $result ? json_encode(["status" => "success", "id" => $pdo->lastInsertId()]) : json_encode(["status" => "error"]);
?>