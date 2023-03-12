export default class KaffeeSlider {
    constructor({
        KaffeeSelector = '.KaffeeSlider',
        KaffeetütenContainerSelector = '.Kaffeetüten',
        zurückSelector = '.BtnZurück',
        nächsterSelector = '.BtnNächster',
        transitionTime = 30,
    } = {} ){
        this.KaffeeSlider = document.querySelector(KaffeeSelector);
        this.slides = document.querySelectorAll(`${KaffeetütenContainerSelector} img`).length;
        this.KaffeetütenContainer = document.querySelector(KaffeetütenContainerSelector);
        this.zurückBtn = document.querySelector(zurückSelector);
        this.nächsterBtn = document.querySelector(nächsterSelector);
        this.slideSize = this.KaffeeSlider.clientWidth;
        this.currentSlide = 0;

        this.setEventListeneres();
    }

    moveKaffeeSlides() {
        this.KaffeetütenContainer.style.transform = `translateX(-${this.currentSlide * this.slideSize}px)`;
    };

    previousSlide() {
        console.log(this);
        this.currentSlide = this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
        this.moveKaffeeSlides();
        };

    nextSlide() {
        console.log(this);
        this.currentSlide = this.currentSlide >= this.slides - 1 ? 0 : this.currentSlide + 1;
        this.moveKaffeeSlides();
        };

   
    setEventListeneres() {
        this.nächsterBtn.addEventListener('click', this.nextSlide.bind(this));
        this.zurückBtn.addEventListener('click', this.previousSlide.bind(this));
    }
}

