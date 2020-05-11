//Variables
const tareasDiv = document.getElementById("displayTareas");
const categoriasDiv = document.getElementById("numeroCategoria");

//EventListeners
eventListeners();
function eventListeners(){
    //Seleccionar categoria
    document.getElementById("submitCategoria").addEventListener("click", muestraCategoriaSeleccionada);
}

//Funciones
//IIFE funcion que mostrara todas las tareas
(function(){
    funcionCreateSelectCategorias();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:80/EjerciciosPHP/Lista_de_tareas/Controllers/tareasController.php?categoria=all", true);
    xhr.onload = function(){
        if(this.status === 200){
            console.log("Funciona el AJAX");
            const allTareas = JSON.parse(this.responseText);
            console.log(allTareas);
            let htmlTemplate = "";
            allTareas.forEach(function(tarea){
              htmlTemplate += `
              <div class="tituloTarea">${tarea._titulo}</div>
              <div class="categoriaTarea">Categoria${tarea._categoria_id} ${tarea._fecha_limite}</div>
              <div class="decripcionTarea">${tarea._descripcion}</div>
              `;
          })
          tareasDiv.innerHTML = htmlTemplate;
        }
    }
    xhr.send();
})();

//Funcion que calcula el numero de categorias y permite crear la seleccion de ellas
function funcionCreateSelectCategorias(){
    let cont = 0;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:80/EjerciciosPHP/Lista_de_tareas/Controllers/categoriasController.php?q=true", true);
    xhr.onload = function(){
        if(this.status === 200){
            const allCategorias = JSON.parse(this.responseText);
            console.log(allCategorias);
            let htmlTemplate = "";
            allCategorias.forEach(function(cat){
                if(cont === 0){
                    htmlTemplate += `
                    <option value="all">Todas las categorias</option>
                    `;
                }
                cont++;
                htmlTemplate += `
                <option value="${cont}">Categoria ${cont}</option>
                `;
            })
            categoriasDiv.innerHTML = htmlTemplate;
        }
    }
    xhr.send();
}

//Seleccionar categoria
function muestraCategoriaSeleccionada(e){
    e.preventDefault();
    tareasDiv.innerHTML = "";
    let link = "http://localhost:80/EjerciciosPHP/Lista_de_tareas/Controllers/tareasController.php?categoria="
    const numCategoria = parseInt(document.getElementById("numeroCategoria").value);
    link += numCategoria;
    console.log(link);
    //Conexion mediante AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.onload = function(){
        if(this.status === 200){
            console.log("Funciona el AJAX");
            const allTareas = JSON.parse(this.responseText);
            console.log(allTareas);
            let htmlTemplate = "";
            allTareas.forEach(function(tarea){
              htmlTemplate += `
              <div class="tituloTarea">${tarea._titulo}</div>
              <div class="categoriaTarea">Categoria${tarea._categoria_id} ${tarea._fecha_limite}</div>
              <div class="decripcionTarea">${tarea._descripcion}</div>
              `;
          })
          tareasDiv.innerHTML = htmlTemplate;
        }
    }
    xhr.send();
    //Fin de conexion mediante AJAX
    window.scrollTo(0, 0);
}