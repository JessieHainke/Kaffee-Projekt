/*
function bspFkt() {
    var x = document.querySelector(".textfeld").value;
    document.querySelector(".text").innerHTML = x;
    console.log(x);
} */

const { list } = require("postcss"); // was macht das hier? Habe ich das hier hinzugefügt? Der Code funktioniert ohne nicht, aber warum habe ich das da hin geschrieben?





function ulliAdd() {
    
    var x = document.querySelector(".textfeld").value; // sammelt das ToDo aus dem Input-Feld
    console.log(x);
    var add = document.createElement("LI"); // erstellt ein Listenelement  ---> macht es die, ohne eine Liste zu haben??
    var toDo = document.createTextNode(x); // erstellt das ToDo als Listenelement
    add.appendChild(toDo); // verbindet Listenelement und ToDo
    document.querySelector(".toDoListe").appendChild(add); // stellt ToDo als Teil der ToDo-Liste dar
    document.querySelector(".textfeld").value = ""; // leert Input-Feld :-)


    
    const ToDoItems = document.querySelector('ul'); 
    console.log(ToDoItems);  // damit zeigt mir die Konsole die Listenitems als Listenitems an, wenn ich sie hinzufüge

    console.log(ToDoItems.children);
    console.log(ToDoItems.children[1]);

    


}

function ulliRemove() {

    var tdlInhalt = document.querySelector(".toDoListe").value; // sammelt das Erledigte aus dem Input-Feld --> NEIN, sammelt NUR TO-DO-LISTEN-INHALT!!!
    var toDoDelete = document.querySelector(".textRemove").value; // sammelt zu löschendes ToDo aus dem Input-Feld
    

    document.querySelector(".toDoListe").remove(toDoDelete); // entfernt (im Moment alles) --> ist aber in der Liste?
    document.querySelector(".textRemove").value = ""; // leert Remove-Input-Feld :-)

    console.log(ToDoItems);

    /*
    if (toDoDelete === ) {
        delete toDo;
    } else {

    }
    
    oder mit searchItem() arbeiten? */

} 




function changeColor() {
    
    var r = Math.floor(Math.random() * '255');
    var g = Math.floor(Math.random() * '255');
    var b = Math.floor(Math.random() * '255');
    //var a = Math.random() * '1';

    document.querySelector(".containerToDoListe").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'; // damit es die Farbe wirklich nach rgb-Dings wechselt, müssen die Zahlen im richtigen Format sein (nm ng!)


}





// TO DO FÜR DIE TO-DO-LISTE:
// - Inputfeld leeren, wenn ToDo übernommen - ERLEDIGT :-)
// - Inputfeld auch mit Enter-Taste bedienbar machen
// - ToDo-Einträge löschen oder als erledigt markieren --> "remove" funktioniert nicht wirklich... --> vielleicht mit "delete"? 
        //--> UM DA ERST EINMAL RAN ZU KOMMEN, KÖNNTE ICH AUS DEN ToDo-Items ein Array machen (?) und dann mit einer for-Schleife dieses durchsuchen!

// - FARBGENERATOR FUNKTIONIERT!! <3 :-)
