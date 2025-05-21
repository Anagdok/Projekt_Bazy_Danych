<?php
require_once('../db.php');
$data = json_decode(file_get_contents("php://input"));
$stmt = $pdo->prepare("DELETE FROM Zamowienia WHERE zamowienie_id=?");
$result = $stmt->execute([$data->zamowienie_id]);
echo $result ? json_encode(["status" => "deleted"]) : json_encode(["status" => "error"]);
?>