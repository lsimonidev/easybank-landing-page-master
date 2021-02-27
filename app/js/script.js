const btnHamburger = document.getElementById('btnHamburger');
const header = document.getElementById('header');
const overlay = document.getElementById('overlay');

btnHamburger.addEventListener('click', ()=>{
    console.log(header.classList);
    header.classList.toggle('open');
    overlay.classList.toggle('fade-in');
    overlay.classList.toggle('fade-out');
})

