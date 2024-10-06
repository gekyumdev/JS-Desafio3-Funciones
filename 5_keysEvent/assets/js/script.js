document.addEventListener('keydown', function (event) {
    if (event.key === 'a'|| event.key === '') {
        colorRosado();
    } else if (event.key === 's'|| event.key === 'S') {
        colorNaranjo();
    } else if (event.key === 'd'|| event.key === 'D'){
        colorCeleste();
    } else if (event.key === 'q' || event.key === 'Q'){
        creacionDivMorado();
    } else if (event.key === 'w' || event.key === 'W'){
        creacionDivGris();
    } else if (event.key === 'e' || event.key === 'E'){
        creacionDivCafe();
    } 
})

function colorRosado(){
    getDiv=document.getElementById('key')
    getDiv.style.backgroundColor='pink'
}
function colorNaranjo(){
    getDiv=document.getElementById('key')
    getDiv.style.backgroundColor='orange'
}
function colorCeleste(){
    getDiv=document.getElementById('key')
    getDiv.style.backgroundColor='#87CEEB'
}

function creacionDivMorado(){
    contenedor=document.getElementById('contenedor')
    newDiv=document.createElement("div")
    newDiv.style.width="200px"
    newDiv.style.height="200px"
    newDiv.style.background="purple"
    newDiv.style.border="1px solid black"
    newDiv.style.marginTop="5px"
    contenedor.appendChild(newDiv)
}

function creacionDivGris(){
    contenedor=document.getElementById('contenedor')
    newDiv=document.createElement("div")
    newDiv.style.width="200px"
    newDiv.style.height="200px"
    newDiv.style.background="grey"
    newDiv.style.border="1px solid black"
    newDiv.style.marginTop="5px"
    contenedor.appendChild(newDiv)
}

function creacionDivCafe(){
    contenedor=document.getElementById('contenedor')
    newDiv=document.createElement("div")
    newDiv.style.width="200px"
    newDiv.style.height="200px"
    newDiv.style.background="brown"
    newDiv.style.border="1px solid black"
    newDiv.style.marginTop="5px"
    contenedor.appendChild(newDiv)
}