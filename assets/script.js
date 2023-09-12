const navEL = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if (window.scrollY > 50) {
        navEL.classList.add(`navbar-scrolled`);
    }
})