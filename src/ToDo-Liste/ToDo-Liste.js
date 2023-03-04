/*
function bspFkt() {
    var x = document.querySelector(".textfeld").value;
    document.querySelector(".text").innerHTML = x;
    console.log(x);
} */

const { list } = require("postcss"); // was macht das hier? Habe ich das hier hinzugefügt? Der Code funktioniert ohne nicht, aber warum habe ich das da hin geschrieben?

function ulliAdd() {
    
    var x = document.querySelector(".textfeld").value; // sammelt das ToDo aus dem Input-Feld

    var add = document.createElement("LI"); // erstellt ein Listenelement
    var toDo = document.createTextNode(x); // erstellt das ToDo als Listenelement
    add.appendChild(toDo); // verbindet Listenelement und ToDo
    document.querySelector(".toDoListe").appendChild(add); // stellt ToDo als Teil der ToDo-Liste dar
    document.querySelector(".textfeld").value = ""; // leert Input-Feld :-)
    
}






function ulliRemove() {

    const ToDoItems = document.querySelectorAll('li'); // damit kann ich auf BESTIMMTE Listenitems zugreifen! Ich muss diese aber mit [Zahl, z.B. 2] explizit anpeilen
    console.log(ToDoItems[2]);

    var tdlInhalt = document.querySelector(".toDoListe").value; // sammelt das Erledigte aus dem Input-Feld --> NEIN, sammelt NUR TO-DO-LISTEN-INHALT!!!
    console.log(tdlInhalt);
    
    var toDoDelete = document.querySelector(".textRemove").value; // sammelt Input-Feld-Inhalt
    console.log(toDoDelete);
    

    document.querySelector(".toDoListe").remove(toDoDelete); // entfernt (im Moment alles) --> ist aber in der Liste?

    document.querySelector(".textRemove").value = ""; // leert Remove-Input-Feld :-)
    document.querySelector(".bg").style.backgroundColor = "white";

    searchItem();

    // ulliAdd();  // Idee: nochmaliges Aufrufen der Fkt ---> erneutes Aufrufen der Fkt funktioniert nicht, weil vorher alles von der ToDoListe gelöscht wird (?)

    //ToDoItems.array.forEach(searchItem()); --> funktioniert nicht, kennt der "forEach" überhaupt?


    function searchItem() {
        if (tdlInhalt === toDoDelete) { // da ist die Verknüpfung falsch, aber auch sonst würde das so nicht funktionieren
            delete toDoDelete;

        } else {
            console.log("ToDo ist nicht in der Liste"); // das zeigt er an - d.h. die Funktion und die if-else-Konstruktion funktionieren, aber das Abgleichen und Erkennen nicht
        }
    }

}




function changeColor() {
    
    var r = Math.floor(Math.random() * '255');
    var g = Math.floor(Math.random() * '255');
    var b = Math.floor(Math.random() * '255');
    //var a = Math.random() * '1';

    document.querySelector(".bg").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'; // damit es die Farbe wirklich nach rgb-Dings wechselt, müssen die Zahlen im richtigen Format sein (nm ng!)


}

// TO DO FÜR DIE TO-DO-LISTE:
// - Inputfeld leeren, wenn ToDo übernommen - ERLEDIGT :-)
// - Inputfeld auch mit Enter-Taste bedienbar machen
// - ToDo-Einträge löschen oder als erledigt markieren --> "remove" funktioniert nicht wirklich... --> vielleicht mit "delete"? 
        //--> UM DA ERST EINMAL RAN ZU KOMMEN, KÖNNTE ICH AUS DEN ToDo-Items ein Array machen (?) und dann mit einer for-Schleife dieses durchsuchen!

// - FARBGENERATOR FUNKTIONIERT!! <3 :-)
