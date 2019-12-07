let controlBtn = document.getElementById('menuControl');
let closeBtn = document.getElementById('menuClose');
let navBar = document.getElementById('hamburger');

controlBtn.addEventListener('click', ()=>{
    navBar.style.top = '-120px';
    navBar.style.right= '-180px';
    navBar.style.transition= 'top 0.7s ease-in';
    navBar.style.webkitTransition= 'top 0.7s ease-in';
})
closeBtn.addEventListener('click', ()=>{
    navBar.style.top = '-500px';
    navBar.style.right= '-500px';
    navBar.style.transition= 'top 1s';
    navBar.style.webkitTransition= 'top 1s';
})
console.log(navBar);
