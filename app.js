let listaNumerosAleatorios = [];
let contador = 1;
let numSecreto = 0;
let resposta = '';
let palavraTentativas;
let chute = 0;
let numeroLimite = 40;
//Funcionou


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    let textoNoP1 = `Escolha um número entre 1 e ${numeroLimite}`;
    exibirTextoNaTela('p', textoNoP1 );
}

function enableButton(buttonId){
    document.getElementById(buttonId).disabled = false;
}

function disableButton(buttonId){
    document.getElementById(buttonId).disabled = true;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    if(listaNumerosAleatorios.length==numeroLimite){
        listaNumerosAleatorios = [];
    }else{
        if(listaNumerosAleatorios.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
        } else {
            listaNumerosAleatorios.push(numeroEscolhido);
            return numeroEscolhido;
        }
    }
}

function reiniciarJogo(){
    contador = 1;
    numSecreto = gerarNumeroAleatorio();
    console.log(numSecreto);
    exibirMensagemInicial()
    limparCampo();
    enableButton('chutarButton');
    //document.getElementById('reiniciarButton').setAttribute('disabled',true).
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

disableButton('reiniciarButton');
numSecreto = gerarNumeroAleatorio();
console.log(numSecreto);
chuteValor = document.getElementById('chute').value;


exibirMensagemInicial()



function verificarChute() {
    chuteValor = document.getElementById('chute').value;
    
    if (chuteValor == numSecreto) {
        palavraTentativas = contador > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1', 'Você acertou!');
        let mensagemTentativas = `Você acertou o número secreto em ${contador} ${palavraTentativas}`
        exibirTextoNaTela('p', mensagemTentativas);
        disableButton('chutarButton');
        enableButton('reiniciarButton');
        //document.getElementById('reiniciarNutton').removeAttribute('disabled');
    } else {
        resposta = chuteValor>numSecreto ? 'maior' : 'menor';
        let mensagemErro = `Número errado! ${chuteValor} é ${resposta} que o número secreto`;
        exibirTextoNaTela('p',mensagemErro);
    }
    contador++;
    limparCampo();
}

