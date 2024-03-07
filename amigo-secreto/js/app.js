
let listaAmigos = [];
listaAmigos = ['a','b','c','d','e'] //Usado para teste 
atualizaLista();

function atualizaLista(attAmigos){ //Nova função para atrualizar a lista
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    listaAmigos.forEach((listaAmigos, index) => { //Adiciona amigos em um novo elemento clicavel
        let amigoElement = document.createElement('span');
        amigoElement.classList.add('amigo-clicavel');
        amigoElement.innerHTML = listaAmigos + '<br>';
        amigoElement.onclick = () => removerAmigo(index);
        lista.appendChild(amigoElement);
    });
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function removerAmigo(index){ //remove amigo quando clicado
    let confirmacao = window.confirm(`Deseja remover o ${listaAmigos[index]} da lista?`);
    if (confirmacao){
        listaAmigos.splice(index, 1);
        atualizaLista();
        atualizaSorteio();
    }
}

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    if (amigo.value == ''){ //verifica digitação em branco
        alert('Insira o nome do seu amigo.');
        return
    }
    if(listaAmigos.includes(amigo.value.toLowerCase())){ //verifica duplicidade
        alert('Nome do seu amigo já incluso. Diferencie.');
        amigo.value = '';
    }else{
        listaAmigos.push(amigo.value);
        if (lista.textContent ==''){
            atualizaLista(amigo.value); //envia para tela
        }else{
            atualizaLista(amigo.value); 
        }
    }
    amigo.value = ''; //limpa campo digitação
}

function sortear(){
    document.getElementById('lista-sorteio').innerHTML = ''
    if (listaAmigos.length < 4){
        alert('Insira pelo menos 4 amigos.');
        return
    }
    embaralha(listaAmigos); //chama função para embaralhar array
    let sorteio = document.getElementById('lista-sorteio');
    for( let i = 0; i < listaAmigos.length; i++){
        if (i==(listaAmigos.length - 1)){
        sorteio.innerHTML = sorteio.innerHTML + `${listaAmigos[i]} ---> ${listaAmigos[0]} <br>`
        }else{
            sorteio.innerHTML = sorteio.innerHTML + `${listaAmigos[i]} ---> ${listaAmigos[i+1]} <br>`
        }
    }
}
function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';
    sorteio = document.getElementById('lista-sorteio').innerHTML = '';
    listaAmigos = [];
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

