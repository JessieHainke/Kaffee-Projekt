
const navOverlay = document.querySelector('.nav');
const navBtn = document.querySelector(".btn");
const closeBtn = document.querySelector('.close')



navBtn.addEventListener ("click", openHandler);

function openHandler() {
    navOverlay.classList.remove("hidden");
}

closeBtn.addEventListener ("click", closeHandler)

function closeHandler () {
    navOverlay.classList.add("hidden");
}

