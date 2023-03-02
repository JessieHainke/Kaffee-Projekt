/*
function bspFkt() {
    var x = document.querySelector(".textfeld").value;
    document.querySelector(".text").innerHTML = x;
    console.log(x);
} */

function ulliAdd() {
    
    var x = document.querySelector(".textfeld").value; // sammelt das ToDo aus dem Input-Feld

    var add = document.createElement("LI"); // erstellt ein Listenelement
    var toDo = document.createTextNode(x); // erstellt das ToDo als Listenelement
    add.appendChild(toDo); // verbindet Listenelement und ToDo
    document.querySelector(".toDoListe").appendChild(add); // stellt ToDo als Teil der ToDo-Liste dar
    document.querySelector(".textfeld").value = ""; // leert Input-Feld :-)
    
}

//document.querySelector(".addToDo").addEventListener("click", ulliAdd);





function ulliRemove() {

    var tdlInhalt = document.querySelector(".toDoListe").value // sammelt das Erledigte aus dem Input-Feld --> NEIN, sammelt NUR TO-DO-LISTEN-INHALT!!!
    console.log(tdlInhalt);
    
    var toDoDelete = document.querySelector(".textRemove").value // sammelt Input-Feld-Inhalt
    console.log(toDoDelete);
    

    document.querySelector(".toDoListe").remove(toDoDelete); // entfernt (im Moment alles) --> ist aber in der Liste?
    document.querySelector(".textRemove").value = ""; // leert Remove-Input-Feld :-)
}




// TO DO FÜR DIE TO-DO-LISTE:
// - Inputfeld leeren, wenn ToDo übernommen - ERLEDIGT :-)
// - Inputfeld auch mit Enter-Taste bedienbar machen
// - ToDo-Einträge löschen oder als erledigt markieren --> "remove" funktioniert nicht wirklich...
