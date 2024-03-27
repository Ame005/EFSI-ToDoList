const rapida = document.getElementById("rapida")

var idLista = 0;
const listaTareas = [];
const listaCompletados = [];

function anadirElemento(){
    const ul = document.getElementById("listaDeTareas");

    const li = document.createElement('li');
    let tareaIngresada = document.getElementById("tareaEscribir").value;
    const textNode = document.createTextNode(tareaIngresada);
    
    li.appendChild(textNode);

    if(tareaIngresada === '') {
        alert("Tenes que ingresar una tarea");
    }else{
        ul.appendChild(li);
    }
    
    li.addEventListener('click', function() {
        const ind = Array.from(ul.children).indexOf(this);
        if (this.style.textDecoration === 'line-through'){
            this.style.textDecoration = 'none';
            listaCompletados[ind] = undefined;
        } else {
            this.style.textDecoration = 'line-through';
            const fechaCompletado = new Date();
            listaCompletados[ind] = fechaCompletado.getTime();
        }
    });
}

function mayorRapidez() {
    console.log("llega");
    const ul = document.getElementById("listaDeTareas");
    const cadaTarea = Array.from(ul.children);
    cadaTarea.forEach((tarea) => {tarea.style.backgroundColor = '';});

    const completadas = listaCompletados.filter(time => time !== undefined);

    const masRapida = listaCompletados.indexOf(Math.min(...completadas));
    cadaTarea.forEach((tarea,ind) => {
        if (ind === masRapida && listaCompletados[ind] !== undefined) {
            tarea.style.backgroundColor = 'lightgreen';
        }
    });
}

function borrarTodo(){
    const ul = document.getElementById("listaDeTareas");
    while (ul.firstChild){
        ul.removeChild(ul.firstChild);
    }

    listaTareas.length = 0;
    listaCompletados.length = 0;
}