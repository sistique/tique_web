<?php
namespace config;

class database{
    public string $db_name = 'inmobiliaria'; //Name database
    public string $db_user = 'root'; // User database
    public string $db_password = 'Karate001.'; // Pass database
    public string $db_host = 'localhost'; // Host Database
    public string $set_name = 'utf8'; // Nombre del conjunto de caracteres permitidos
    public string $sql_mode = ''; // Modo de SQL
    public int $time_out = 100; // Tiempo de espera de transaccion
}