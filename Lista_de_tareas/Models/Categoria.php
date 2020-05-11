<?php

function funcionCategoriaVergas(){
    //$archivoJSON = NULL;
    require_once 'DB.php';
    if(isset($connection)){
        $query = $connection->prepare("SELECT * FROM categorias");
            $query->bindParam(":id", $id, PDO::PARAM_INT);
            $query->execute();
    
            $categorias = array();
    
            while($row = $query->fetch(PDO::FETCH_ASSOC)){
                $categoria = new Categoria($row["id"], $row["nombre"]);
                $categorias[] = $categoria;
            }
    
            $archivoJSON = json_encode($categorias);
            echo $archivoJSON;
    }
}

echo funcionCategoriaVergas();

?>