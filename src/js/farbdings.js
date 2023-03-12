



function changeColor(r, g, b) {
    let r = r + 5;
    let g = g + 10;
    let b = b + 1;
    alert (r, ' ,', g, ' ,' b);
}

changeColor(12, 9, 100);











function changeColor() {
    document.body.style.backgroundColor = 'rgb(a, b, c)';
    a = 99;
    b = 151 + a;
    c = a - 33;
}













/* Variable, die für die Farbe steht
var x = irgendeine Farbe

/* Funktion, die irgendeine Farbe auswählt 


/*Funktion, die den Hintergrund in der Farbe x färbt
function Farbe(x) {
    document.style.backgroundColor = x
}


/*Funktion, die durch Anklicken des Buttons die FHintergrund-Färbung in der Farbe x auslöst

function Farbwechsel {
    document.querySelector(".Farbwechsel").style.backgroundColor = Farbe(x);
}


function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function changeColor() {
  let hex = randomHexColor();
  document.getElementsById('color').value = hex;
}

function clickHandler(event) {
  changeColor();
  event.preventDefault();
}

document.addEventListener('click', clickHandler);

changeColor();*/





