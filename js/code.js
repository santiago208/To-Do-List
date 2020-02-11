// creo un boton cerrar y lo agrego a cada elemento de la lista

let myNodelist = document.getElementsByTagName("LI")
let i
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    
    myNodelist[i].appendChild(span);
}

// Eliminar el icono de la lista

let close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none"
    }
}

// Agrega el icono a la lista

let list = document.querySelector('ul')
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }
}, false);

// Agrega un nuevo elemento a la lista
const newElement = () => {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarea").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t)

    if(inputValue === ''){
        alert('Ingresa una tarea')
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('tarea').value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span)
    // let array
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function (){
        let div = this.parentElement;
        div.style.display = "none";
    }
   }
}