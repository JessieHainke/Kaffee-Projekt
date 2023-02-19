
function menu() {
    const x = document.getElementsByClassName("logo2");
        if (x.style.display === 'block') {
            x.style.display = "none";
        } else {
            x.style.display = "block";
    }



}
/*
    constructor({
        menu = '.menu',
        transitionTime = 3000,
    } = {} ){
        this.menu = document.querySelector(menu);
        this.menuSize = this.menu.offsetWidth;
        this.menuPosition = 0;
    }
}





menu() {
    this.menu.style.transform = `translateX(-${this.menuPosition * this.menuSize}px)`;
}
*/
