<?php
require_once('../db.php');
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;
if ($id > 0) {
    $stmt = $pdo->prepare("SELECT * FROM Produkty WHERE produkt_id = ?");
    $stmt->execute([$id]);
} else {
    $stmt = $pdo->query("SELECT * FROM Produkty");
}
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
?>