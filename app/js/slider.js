slides = document.querySelectorAll('.slider li');
next = document.getElementById('slider-next');
prev = document.getElementById('slider-prev');

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let cont = 0;
const size = slides.length

function nextSlide(){
  slides[cont].classList.toggle('active');
  slides[cont+1].classList.toggle('active');
  cont++;
}

function prevSlide(){
  slides[cont].classList.toggle('active');
  slides[cont-1].classList.toggle('active');
  cont--;
}
