<?php
$host = 'sql.freedb.tech'; 
$db   = 'freedb_GamesStore'; 
$user = 'freedb_domino';       
$pass = '$4dMMnS4fy%6cBK';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;port=3306;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Połączenie z bazą nie powiodło się"]);
    exit;
}
?>
