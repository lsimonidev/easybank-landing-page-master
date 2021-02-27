const body = document.querySelector('body');
const btnHamburger = document.getElementById('btnHamburger');
const header = document.getElementById('header');
const fadeOut = document.querySelectorAll('.fade-out');

console.log(fadeOut);

btnHamburger.addEventListener('click', ()=>{
    header.classList.toggle('open');
    body.classList.toggle('noscroll');
   fadeOut.forEach(element => {
       element.classList.toggle('fade-in');
       element.classList.toggle('fade-out');
   });
})

