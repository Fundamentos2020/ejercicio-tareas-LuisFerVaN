<?php

class Tarea{
    public $_id;
    public $_titulo;
    public $_descripcion;
    public $_fecha_limite;
    public $_completada;
    public $_categoria_id;

    public function __construct($id, $titulo, $descripcion, $fecha_limite, $completada, $categoria_id){
        $this->_id = $id;
        $this->_titulo = $titulo;
        $this->_descripcion = $descripcion;
        $this->_fecha_limite = $fecha_limite;
        $this->_completada = $completada;
        $this->_categoria_id = $categoria_id;
    }
}

class Categoria{
    public $_id;
    public $_nombre;

    public function __construct($id, $nombre){
        $this->_id = $id;
        $this->_titulo = $nombre;
    }
}

$connection = NULL;

try{
    $dns = "mysql:host=localhost;dbname=lista_tareas";
    $username = "root";
    $password = "";

    $connection = new PDO($dns, $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

}catch(Exception $e){
    echo $e->getMessage();
    die();
}

?>