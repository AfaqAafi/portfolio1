let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
});

window.onscroll = ()=>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active')
}

const sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    reset: true
})
sr.reveal('.home-text', {delay:200, origin: 'top'})
sr.reveal('.home-img', {delay:400, origin: 'top'})

sr.reveal('.about, .service, .cta, .resume, .contact, .copyright',{delay: 200, origin:'top'})