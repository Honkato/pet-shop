const botao = document.getElementById('burger')
const menuMobile = document.getElementById('menuMobile')
const opDoacoes = document.getElementById('opDoacao')
// const cad = document.querySelector('#botao_cadastro')
botao.addEventListener('click', abrir)

function abrir(){
    menuMobileBack.classList.toggle('active')
    atrasBurger.classList.toggle('active')
    botao.classList.toggle('active')
}

opDoacoes.addEventListener('click', abrirOp)

function abrirOp(){
    opDoacoes.classList.toggle('active')
    opcoes.classList.toggle('active')
}


