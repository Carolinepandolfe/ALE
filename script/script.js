let menu = document.querySelector('.burguer');
let barra1 = document.querySelector('.barra:nth-child(1)');
let barra2 = document.querySelector('.barra:nth-child(2)');
let barra3 = document.querySelector('.barra:nth-child(3)');
let nav = document.querySelector('nav');

menu.onclick = () => {
    barra1.classList.toggle('barrinha');
    barra2.classList.toggle('barrinha');
    barra3.classList.toggle('barrinha');
    nav.classList.toggle('navClick');
}