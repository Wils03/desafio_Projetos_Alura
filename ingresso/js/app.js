let ingPista = 100;
let ingCadeiraSup = 200;
let ingCadeiraInf = 400;
exibirTextoNaTela('qtd-pista',ingPista);
exibirTextoNaTela('qtd-superior',ingCadeiraSup);
exibirTextoNaTela('qtd-inferior',ingCadeiraInf);

function comprar(){
//capturar os campos
    let ingComprado = document.getElementById('tipo-ingresso');
    let quantIngComprado = document.getElementById('qtd');
//verifica e subtrai ingressos disponiveis
    ingressosDisponiveis(ingComprado.value, quantIngComprado.value);

    quantIngComprado.value = '';
}

function ingressosDisponiveis(tipo, quant){
    switch(tipo){
        case ('pista'):
            if ((quant <= ingPista) && (quant > 0)){
                ingPista = ingPista - quant;
                alert('Parabéns. Compra realizada com sucesso.');
                exibirTextoNaTela('qtd-pista',ingPista);
            }else{
                alert('Quantidade desejada indiponivel.');
                return
            }
        break
        case ('superior'):
            if ((quant <= ingCadeiraSup)&& (quant > 0)){
                ingCadeiraSup = ingCadeiraSup - quant;
                alert('Parabéns. Compra realizada com sucesso.');
                exibirTextoNaTela('qtd-superior',ingCadeiraSup);
            }else{
                alert('Quantidade desejada indiponivel.');
                return
            }
        break
        case ('inferior'):
            if ((quant <= ingCadeiraInf)&& (quant > 0)){
                ingCadeiraInf = ingCadeiraInf - quant;
                alert('Parabéns. Compra realizada com sucesso.');
                exibirTextoNaTela('qtd-inferior',ingCadeiraInf);
            }else{
                alert('Quantidade desejada indiponivel.');
                return
            }
        break
    }
    
}

function exibirTextoNaTela(id,texto){
    let campo = document.getElementById(id)
    campo.innerHTML = texto;
}