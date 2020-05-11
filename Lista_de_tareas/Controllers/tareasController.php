<?php

require_once '../Models/Tarea.php';

if($_GET["categoria"]){
    $auxGET = $_GET["categoria"];  
    if(is_numeric($auxGET)){
        $archivoPrueba = funcionVergas($auxGET);
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
        header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
        json_encode($archivoPrueba);
        echo $archivoPrueba;
    }  
}

?>