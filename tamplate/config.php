<?php
$servername ="localhost";
$database ="message_me";
$username ="root";
$password ="";

$conn = mysqli($servername, $username, $password, $database);

if(!conn){
    die("Koneksi Gagal : " . mysqli_connect_error());
} else {
    echo "Koneksi Berhasil";
}
?>