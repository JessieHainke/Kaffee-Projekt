
document.querySelector(".animation").addEventListener ("click", animation, false);

function animation() {                                  //     färbt die Hintergründe der divs schwarz und die Schrift weiß und zeigt den entsprechenden Text an (also hoffentlich irgendwann...)

    var animationDiv = document.querySelector('.SmartphoneNav');
   
   if (animationDiv.style.display === "none") {
        animationDiv.style.display = "block";
        
        
    } else {
        animationDiv.style.display = "none";
        console.log('hier funktioniert es')
    }
}


/*

 var animationDiv = document.createElement("div"); // diese wunderbare Variable erstellt div-Elemente   

    if (animationDiv.style.display === 'block') {
        animationDiv.style.display = "none";
    } else {
        animationDiv.style.display = "block";
    }

    animationDiv.style.backgroundColor = "black";
    animationDiv.style.color = "white";
    animationDiv.style.height = "100vh";
    animationDiv.style.width = "100vw";


    */