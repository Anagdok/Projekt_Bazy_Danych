<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("UPDATE Produkty SET nazwa=?, cena=?, opis=?, data_wydania=?, ilosc_w_magazynie=? WHERE produkt_id=?");
$result = $stmt->execute([$data->nazwa, $data->cena, $data->opis, $data->data_wydania, $data->ilosc_w_magazynie, $data->produkt_id]);
echo $result ? json_encode(["status" => "success"]) : json_encode(["status" => "error"]);
?>