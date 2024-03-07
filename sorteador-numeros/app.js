
function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    if ((ate - de + 1) < quantidade){
        alert('No campo “Quantidade de números” deve ser igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”. Verifique!');
        return;
    }

    for (let i = 0; i < quantidade; i++){
        let num = obterNumeroAleatorio(de,ate);

        while (sorteados.includes(num)){//verificando numeros repitidos
            num = obterNumeroAleatorio(de,ate);
        }
        sorteados.push(num);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){ //Gerando um número inteiro aleatório entre dois valores, incluindo o MIN e MAX
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
function reiniciar (){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}