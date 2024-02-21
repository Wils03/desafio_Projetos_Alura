function alterarStatus(cod){
    let gameId ='game-'+cod;
    let gameClicado = document.getElementById(gameId);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')){ 
        console.log(gameId, ' devolvido');
        imagem.classList.remove('dashboard__item__img--rented'); 
        botao.classList.remove('dashboard__item__button--return'); 
        botao.innerHTML = 'Alugar'; 
    } else{
        console.log(gameId, ' reservado');
        imagem.classList.add('dashboard__item__img--rented'); 
        botao.classList.add('dashboard__item__button--return'); 
        botao.innerHTML = 'Devolver'; 
    }
}