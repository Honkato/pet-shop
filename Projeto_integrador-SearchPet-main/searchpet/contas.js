const emaiUsu = document.getElementById("login")
const senhaUsu = document.getElementById('senha')

contas = []

function adicionar(email, senha, nome){
    obterContas()
    var novaConta = {email: email, senha:senha, nome:nome}
    contas.push(novaConta)
    console.log(contas)
    salvarConta()
    alert('Cadastro feito com sucesso')
}

function salvarConta(){
    localStorage.setItem('contasCadastros', JSON.stringify(contas))
}

function obterContas(){
    if (localStorage.getItem('contasCadastros') != null){
        contas = JSON.parse(localStorage.getItem('contasCadastros'))
    }
}

function logar(){
    var login = false
    obterContas()
    contas.forEach((verificador) =>{
        console.log(verificador.email)
        
        if (verificador.email == emaiUsu.value && verificador.senha == senhaUsu.value){
            alert('logado')
            window.location.href = "/searchpet/logado/l_home/index.html"
            login = true
        }
    })
    if (login == false){
        alert('Email /ou senha Invalido(s)')
    }
}
function criarAdm(){
    if (localStorage.getItem('contasCadastros') == null){
        contas = []
        var novaConta = {email: 'adm', senha:'1234', nome:'adm'}
        contas.push(novaConta)
        console.log(contas)
    }
}
criarAdm()
