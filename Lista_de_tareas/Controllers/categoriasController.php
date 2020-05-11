<?php

require_once '../Models/Categoria.php';

if(isset($_GET["q"])){  
    $auxGET = $_GET["q"];
    if($auxGET == "true"){
        $archivoPrueba = funcionCategoriaVergas();
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
        header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
    }  
}

echo $archivoPrueba;
exit();

?>