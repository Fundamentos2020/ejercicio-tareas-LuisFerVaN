<?php

function funcionVergas($catID){
    $archivoJSON = NULL;
    require_once 'DB.php';
    if(isset($connection)){
        $query = $connection->prepare("SELECT * FROM Tareas WHERE categoria = $catID");
            $query->bindParam(":id", $id, PDO::PARAM_INT);
            $query->execute();

            $tareas = array();

            while($row = $query->fetch(PDO::FETCH_ASSOC)){
                $tarea = new Tarea($row["id"], $row["titulo"], $row["descripcion"], $row["fecha_limite"], $row["completada"], $row["categoria"]);
                $tareas[] = $tarea;
            }

            $archivoJSON = json_encode($tareas);
    }
    return $archivoJSON;
}
function funcionVergasTodo(){
    $archivoJSON = NULL;
    require_once 'DB.php';
    if(isset($connection)){
        $query = $connection->prepare("SELECT * FROM Tareas");
            $query->bindParam(":id", $id, PDO::PARAM_INT);
            $query->execute();

            $tareas = array();

            while($row = $query->fetch(PDO::FETCH_ASSOC)){
                $tarea = new Tarea($row["id"], $row["titulo"], $row["descripcion"], $row["fecha_limite"], $row["completada"], $row["categoria"]);
                $tareas[] = $tarea;
            }

            $archivoJSON = json_encode($tareas);
    }
    return $archivoJSON;
}

?>