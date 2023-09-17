const navEL = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    if (window.scrollY > 700) {
        navEL.classList.add(`navbar-scrolled`);
    }
})

