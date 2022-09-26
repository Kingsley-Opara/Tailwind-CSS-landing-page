const hamburger = document.querySelector('.hamburger')
const x = document.querySelector('.x')
const menu = document.querySelector('.menu')
let showNavbar = false

const checks = ()=>{
    if (!showNavbar){
        console.log(showNavbar)
        hamburger.setAttribute('class', 'none md:hidden')
        x.setAttribute('class', 'md:hidden')
        menu.classList.remove('hidden')
    }
    

}
const hidden = ()=>{
    if(showNavbar){
        hamburger.setAttribute('class', 'md:hidden')
        x.setAttribute('class', 'none md:hidden')
        menu.classList.add('hidden')
    }

}
hamburger.addEventListener('click', ()=>{checks(), console.log('hello'), showNavbar=true})

x.addEventListener('click', ()=>{hidden(), showNavbar=false})