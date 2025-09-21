// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problem

const inputNombre = document.getElementById("amigo");
const elementoLista = document.getElementById("listaAmigos");
const listaAmigos = []
const elementoResultado = document.getElementById("resultado");

inputNombre.addEventListener("keypress", function(e){
    if(e.key === "Enter") {
        agregarAmigo();
    }
});

document.getElementByid("botonAgregar").addEventListener("click", agregarAmigo);
document.getElementByid("botonSortear").addEventListener("click", sortearAmigo);

function agregarAmigo () {
    const nombre = inputNombre.value.trim()
    
    if(listaAmigos.includes(nombre)) {
        alert ("Este nombre ya esta en la lista");
        return;
    }
    
    listaAmigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    elementoLista.appendChild(li);

    inputNombre.value = "";
}

function sortearAmigo() {
    
    if (listaAmigos.length < 2) {
        alert ("Agrege almenos 2 amigos");
        return;
    }
    
    let copiaListaAmigos = [];
    let intentos = 0;
    const maxIntentos = 100;
    
    do { 
        copiaListaAmigos = [...listaAmigos].sort(() => Math.random() - 0.5);
        intentos++;
        if(intentos > maxIntentos) {
            alert ("Se supero la cantidad maxima de intentos");
            return;
        }
    } while (listaAmigos.some((nombre, i) => nombre === copiaListaAmigos[i]))
    
    listaAmigos.forEach((nombre, i) => {
        const li = document.createElement("li");
        li.textContent = `${nombre} → ${copiaListaAmigos[i]}`;
        elementoResultado.appendChild(li);
        
    })
}

