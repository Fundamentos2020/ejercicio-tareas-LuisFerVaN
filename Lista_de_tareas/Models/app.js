//Variables
const categoriaDiv = document.getElementById("displayTareas");

//EventListeners
eventListeners();
function eventListeners(){
    //Seleccionar categoria
    document.getElementById("submitCategoria").addEventListener("click", muestraCategoriaSeleccionada);
}

//Funciones
//IIFE funcion que mostrara todas las tareas

funcionPrueba();
function funcionPrueba(){
    let formData = new FormData();
    formData.append("q", "true");
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "Categoria.php", true);
    //../Controllers/categoriasController.php?q=true
    xhr.onload = function(){
        if(this.status === 200){
            console.log("Funciona AJAX con PHP");
            //let variable = JSON.parse(this.response);
            console.log(this.response);
            console.log(this.getAllResponseHeaders());
        }
    }
    xhr.send();
}

//Seleccionar categoria
function muestraCategoriaSeleccionada(e){
    e.preventDefault();
    categoriaDiv.innerHTML = "";
    const numCategoria = parseInt(document.getElementById("numeroCategoria").value);
    //Conexion mediante AJAX
    //let htmlTemplate = "";
    categoriaDiv.innerHTML = htmlTemplate;
    //Fin de conexion mediante AJAX
    window.scrollTo(0, 0);
}