var bspVar = document.querySelector(".btn").addEventListener("click", clickFunction);


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

}