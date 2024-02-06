const form = document.getElementById("form-deposito")

function validaFormulario(valorA,valorB){
    return valorB > valorA
}

form.addEventListener('submit', function(e){
    let formValid
    e.preventDefault();

const valorA = document.getElementById('campoA').value 
const valorB = document.getElementById('campoB').value 
const mensagemSucesso = `Tudo certo o valor B: ${valorB} é maior que o valor A: ${valorA}`

    formValid = validaFormulario(valorA, valorB)
    if (formValid){
        const containerMensagemSucesso = document.querySelector(".sucess-message")//aqui vamos chamar nosso elemento que foi feito no css
        containerMensagemSucesso.innerHTML =  mensagemSucesso;//o innerhtml serve pra escrever o conteúdo html no elemento
        containerMensagemSucesso.style.display = 'block'
        document.getElementById('campoA').value = "";
        document.getElementById('campoB').value = ""
        
    }

    else if (valorB == valorA){
        alert('ERRO,valor de A igual valor de B')
        document.getElementById('campoA').value = "";
        document.getElementById('campoB').value = ""
    }else {
        alert('ERRO, valor A maior que valor B')
        document.getElementById('campoA').value = "";
        document.getElementById('campoB').value = "";

    }
    
})

console.log(form);
