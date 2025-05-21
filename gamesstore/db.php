<?php
$host = 'localhost';
$dbname = 'sklep'; // Zmień na nazwę Twojej bazy
$username = 'root'; // Domyślny użytkownik w XAMPP
$password = ''; // Domyślnie puste hasło w XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("❌ Błąd połączenia: " . $e->getMessage());
}
?>
