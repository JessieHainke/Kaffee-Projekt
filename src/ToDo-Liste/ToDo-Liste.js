
function ulliAdd() {
    
    var x = document.querySelector(".textfeld").value; // sammelt das ToDo aus dem Input-Feld

    var add = document.createElement("LI"); // erstellt ein Listenelement
    var toDo = document.createTextNode(x); // erstellt das ToDo als Listenelement
    add.appendChild(toDo); // verbindet Listenelement und ToDo
    document.querySelector(".toDoListe").appendChild(add); // stellt ToDo als Teil der ToDo-Liste dar
}

function ulliRemove() {

    var y = document.querySelector(".textRemove").value; // sammelt das Erledigte aus dem Input-Feld

    y.remove(); 
}

// TO DO FÜR DIE TO-DO-LISTE:
// - Inputfeld leeren, wenn ToDo übernommen
// - Inputfeld auch mit Enter-Taste bedienbar machen
// - ToDo-Einträge löschen oder als erledigt markieren --> "remove" funktioniert nicht wirklich...
