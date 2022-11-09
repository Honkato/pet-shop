const botao = document.getElementById('burger')
const menuMobile = document.getElementById('menuMobile')


botao.addEventListener('click', abrir)

function abrir(){
    menuMobileBack.classList.toggle('active')
    menuMobile.classList.toggle('active')
    atrasBurger.classList.toggle('active')
    botao.classList.toggle('active')
}
