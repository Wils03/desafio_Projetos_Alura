let alugados = 1; //por padrão o HTML  já mostra um game devolvido.
function alterarStatus(cod){
    let gameId ='game-'+cod;
    let gameClicado = document.getElementById(gameId);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    

    if (botao.classList.contains('dashboard__item__button--return')){ 
        let resposta = window.confirm(`Deseja devolver o jogo ${gameClicado.querySelector('.dashboard__item__name').innerHTML}?`);
        if (resposta){
        console.log(gameId, ' devolvido');
        alugados --;
        console.log(`Posui atualmente ${alugados} jogos alugados.`);
        imagem.classList.remove('dashboard__item__img--rented'); 
        botao.classList.remove('dashboard__item__button--return'); 
        botao.innerHTML = 'Alugar';
        }else{
            return
        }
    } else{
        let resposta = window.confirm(`Deseja alugar o jogo ${gameClicado.querySelector('.dashboard__item__name').innerHTML}?`);
        if (resposta){
        console.log(gameId, ' reservado');
        alugados++;
        console.log(`Posui atualmente ${alugados} jogos alugados.`);
        imagem.classList.add('dashboard__item__img--rented'); 
        botao.classList.add('dashboard__item__button--return'); 
        botao.innerHTML = 'Devolver'; 
        }else{
            return
        }
    }
}