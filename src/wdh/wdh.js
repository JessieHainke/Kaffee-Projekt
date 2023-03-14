
const greeting = document.querySelector('.moin');
const greeting2 = document.querySelector('.moinMoin');

greeting.addEventListener("click", greetHandler);


function greetHandler() {
    console.log('Moin!');
}

greeting2.addEventListener('click', greetHandler2);

function greetHandler2 () {
    console.log('Moin Moin!');
}

const greeting3 = document.querySelector('.gutenMorgen');

greeting3.addEventListener('click', greetHandler3);

function greetHandler3 () {
    console.log('Guten Morgen!')
}



// const stopChangingWindowSize = document.querySelector('.stop'); --> NEIN, du brauchst keine Variable, wenn du mit dem window. arbeitest! :-)

window.addEventListener('resize', stop);

function stop() {
    console.log('stop changing window Size');

}

window.addEventListener('wheel', stopWheel);

function stopWheel() {
    console.log('stop wheel!');
}
























/*var bspVar = document.querySelector(".btn").addEventListener("click", clickFunction);


function clickFunction() {
    document.body.style.backgroundColor = "blue";
}

function ulliAdd() {
    
    var x = document.querySelector(".textfeld").value; // sammelt das ToDo aus dem Input-Feld
    console.log(x);
    var add = document.createElement("LI"); // erstellt ein Listenelement
    var toDo = document.createTextNode(x); // erstellt das ToDo als Listenelement
    add.appendChild(toDo); // verbindet Listenelement und ToDo
    document.querySelector(".toDoListe").appendChild(add); // stellt ToDo als Teil der ToDo-Liste dar
    document.querySelector(".textfeld").value = ""; // leert Input-Feld :-)


    const ToDoItems = document.querySelector('li'); 
    console.log(ToDoItems);  // damit zeigt mir die Konsole die Listenitems als Listenitems an, wenn ich sie hinzufüge

}*/