let produtoCarrinho = ['Celular'];
let valorProdutoCarrinho = [1400];
let quantProd = [1];
let totalCarrinho = 0;

function adicionar(){
    let tam;
        //busca a quantidade do produto
    quantProd.push(parseInt(document.getElementById('quantidade').value));
    //console.log('tamanho:', quantProd.length, '\n quantidade: ',quantProd[quantProd.length-1]);
    //console.log('Array Quantiade: ',quantProd);
    tam = quantProd.length;

    if (quantProd[tam - 1] == 'NaN'){
        console.log('Entrou:', quantProd(tam-1));
        quantProd.pop();
        alert("Quantidade não inserida. Verifique.");
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
    addDiv(mensagem);
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
}
function separarArray (array, posi){
   let item = array.split(' - R$');
   return item[posi];
}

function somaCarrinhoDeCompras(quant, valor){
    //console.log('chamou',quant,valor);
    totalCarrinho = 0;
    for (let i = 0; i < quant.length ; i++){
        //console.log('entrou no for',quant[i] , valor[i]);
         let soma = (quant[i] * valor[i]);
         totalCarrinho += soma;
        // console.log('total carrinho:',totalCarrinho);
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo;
    campo = document.getElementById(tag);
    console.log('Campo',campo);
    console.log('Texto:', texto)
    campo.innerHTML=texto;
}
function addDiv(mensagem) {
    console.log(mensagem);
    let newDiv = document.createElement('section'), //Cria um element DIV
    container = document.getElementById('lista-produtos'); //Grava a sua div que receberá novos dados em uma variável
   
    newDiv.innerHTML = mensagem; //Insere um conteúdo dentro da nova div

    container.append(newDiv); //Adiciona ao final da sua div o novo conteúdo
}