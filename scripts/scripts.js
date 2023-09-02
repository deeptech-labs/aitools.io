const carousel1 = document.getElementById('carousel1');
const container = document.querySelector('.carousel-container');

const wrapper1 = document.querySelector('#c-wrapper1');
const wrapper2 = document.querySelector('#c-wrapper2');
const wrapper3 = document.querySelector('#c-wrapper3');

const slides1 = document.querySelectorAll('#slides1');
const slides2 = document.querySelectorAll('#slides2');
const slides3 = document.querySelectorAll('#slides3');

const prevButton1 = document.querySelector('#prev-button1');
const nextButton1 = document.querySelector('#next-button1');
const prevButton2 = document.querySelector('#prev-button2');
const nextButton2 = document.querySelector('#next-button2');
const prevButton3 = document.querySelector('#prev-button3');
const nextButton3 = document.querySelector('#next-button3');

var numberOfSlides1 = slides1.length;
var numberOfSlides2 = slides2.length;
var numberOfSlides3 = slides3.length;

let currentSlide1 = 0;
let currentSlide2 = 0;
let currentSlide3 = 0;



nextButton1.addEventListener('click', () => {
  var tempSlidesAmonut; //variable to 

  if (window.innerWidth < 768) {
    tempSlidesAmonut = 2;
  }
  if (window.innerWidth >= 768 & window.innerWidth <= 1199) {
    tempSlidesAmonut = 3;
  }
  if (window.innerWidth > 1199) {
    tempSlidesAmonut = 4;
  }

  if (currentSlide1 < numberOfSlides1 - tempSlidesAmonut) {
    currentSlide1++;
    updateCarousel(wrapper1, currentSlide1);
  }
});

prevButton1.addEventListener('click', () => {
  if (currentSlide1 > 0) {
    currentSlide1--;
    updateCarousel(wrapper1, currentSlide1);
  }
});

nextButton2.addEventListener('click', () => {
  var tempSlidesAmonut; //variable to 

  if (window.innerWidth < 768) {
    tempSlidesAmonut = 2;
  }
  if (window.innerWidth >= 768 & window.innerWidth <= 1199) {
    tempSlidesAmonut = 3;
  }
  if (window.innerWidth > 1199) {
    tempSlidesAmonut = 4;
  }

  if (currentSlide2 < numberOfSlides2 - tempSlidesAmonut) {
    currentSlide2++;
    updateCarousel(wrapper2, currentSlide2);
  }
});

prevButton2.addEventListener('click', () => {
  if (currentSlide2 > 0) {
    currentSlide2--;
    updateCarousel(wrapper2, currentSlide2);
  }
});

nextButton3.addEventListener('click', () => {
  var tempSlidesAmonut; //variable to 

  if (window.innerWidth < 768) {
    tempSlidesAmonut = 2;
  }
  if (window.innerWidth >= 768 & window.innerWidth <= 1199) {
    tempSlidesAmonut = 3;
  }
  if (window.innerWidth > 1199) {
    tempSlidesAmonut = 4;
  }

  if (currentSlide3 < numberOfSlides3 - tempSlidesAmonut) {
    currentSlide3++;
    updateCarousel(wrapper3, currentSlide3);
  }
});

prevButton3.addEventListener('click', () => {
  if (currentSlide3 > 0) {
    currentSlide3--;
    updateCarousel(wrapper3, currentSlide3);
  }
});

window.onresize = () => {
  wrapper1.style.transform = null;
  wrapper2.style.transform = null;
  wrapper3.style.transform = null;
}

function nextButtonBehaviour(wrapper, currentSlide, numberOfSlides) {
  var tempSlidesAmonut; //variable to 

  if (window.innerWidth < 768) {
    tempSlidesAmonut = 2;
  }
  if (window.innerWidth >= 768 & window.innerWidth <= 1199) {
    tempSlidesAmonut = 3;
  }
  if (window.innerWidth > 1199) {
    tempSlidesAmonut = 4;
  }

  if (currentSlide < numberOfSlides - tempSlidesAmonut) {
    currentSlide++;
    updateCarousel(wrapper, currentSlide);
  }
}

function updateCarousel(wrapper, currentSlide) {
  if (window.innerWidth < 768) {
    const translateX = -currentSlide * 50; // 100% for each slide
    wrapper.style.transform = `translateX(${translateX}%)`;
  }
  if (window.innerWidth >= 768 & window.innerWidth <= 1199) {
    const translateX = -currentSlide * 33.3; // 100% for each slide
    wrapper.style.transform = `translateX(${translateX}%)`;
  }
  if (window.innerWidth > 1199) {
    const translateX = -currentSlide * 25; // 100% for each slide
    wrapper.style.transform = `translateX(${translateX}%)`;
  }
  
}

function resetTranslateX(translateElement) {
    translateElement.style.transform = 'translateX(0)';
}

window.addEventListener('resize', () => {
    
    resetTranslateX(wrapper1);
    resetTranslateX(wrapper2);
    resetTranslateX(wrapper3);

    currentSlide1 = 0;
    currentSlide2 = 0;
    currentSlide3 = 0;
});

