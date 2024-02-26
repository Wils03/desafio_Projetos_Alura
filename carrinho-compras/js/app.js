let produtoCarrinho = [];
let valorProdutoCarrinho = [];
let quantProd = [];
let totalCarrinho = 0;
exibirTextoNaTela('lista-produtos','');
exibirTextoNaTela('valor-total','R$'+totalCarrinho);

function adicionar(){
    let tam;
        //busca a quantidade do produto
    quantProd.push(parseInt(document.getElementById('quantidade').value));
    tam = quantProd.length;
    console.log('tam:',tam,'arrau quant:',quantProd)
    if (isNaN(quantProd[tam - 1]) || quantProd[tam-1] <=0){ //verificando se a quantidade é valida
        console.log('Quantidade invalida', quantProd[tam-1]);
        quantProd.pop();
        alert("Quantidade inserida invalida. Verifique.");
        return
    }
        //busca o nome do produto
    produtoCarrinho.push(separarArray(document.getElementById('produto').value,0));

        //busca a quantide do produto
    valorProdutoCarrinho.push(parseFloat(separarArray(document.getElementById('produto').value,1)));

        //mostra na tela os itens selecionados
    let mensagem = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> ${quantProd[tam-1]}x</span>  ${produtoCarrinho[tam-1]} <span class="texto-azul">R$${valorProdutoCarrinho[tam-1]}</span>
    </section>`
    addElemento('section','lista-produtos',mensagem);

        //chama somatorio e mostra na tela
    somaCarrinhoDeCompras(quantProd, valorProdutoCarrinho);
    exibirTextoNaTela('valor-total','R$'+totalCarrinho);
   
}

function limpar(){
    produtoCarrinho.length = 0;
    valorProdutoCarrinho.length = 0;
    quantProd.length=0;
    totalCarrinho = 0;
    exibirTextoNaTela('valor-total','R$'+totalCarrinho);
    exibirTextoNaTela('lista-produtos','');
    console.log('Todos itens removidos.')
}
function separarArray (array, posi){ //separa a coleta dos itens em Array. Sendo posi = 0, o nome e posi = 1 o valor do produto
   let item = array.split(' - R$');
   return item[posi];
}

function somaCarrinhoDeCompras(quant, valor){
    totalCarrinho = 0;
    for (let i = 0; i < quant.length ; i++){
         let soma = (quant[i] * valor[i]);
         totalCarrinho += soma;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo;
    campo = document.getElementById(tag);
    campo.innerHTML=texto;
}
function addElemento(element,local,mensagem) {
    console.log(`Foi adicionado o elemento ${element}, no campo (ID): ${local}\nCom a seguinte informação:\n ${mensagem}`);
    let newElem = document.createElement(element), //Cria um elemento
    container = document.getElementById(local); //Grava o seu elemento que receberá novos dados em uma variável
    newElem.innerHTML = mensagem; //Insere um conteúdo dentro do novo elemento
    container.append(newElem); //Adiciona ao final do seu elemento o novo conteúdo
}