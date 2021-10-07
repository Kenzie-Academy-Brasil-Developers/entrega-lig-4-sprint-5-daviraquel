//empate
const mSn = 'Deu empate!';
function makeMessageDraw(){
    const boxMsn = document.querySelector(".showPlayer")
    boxMsn.innerText = mSn
}

//vitória
function winMessage(){
    let mensagemVitória = document.querySelector(".showPlayer")
    if(counter === 1){
        mensagemVitória.innerText = "vitória player1"
        mensagemVitória.style.color = "#DC31BE"
        mensagemVitória.style.backgroundColor = "transparent"
    }else{
        mensagemVitória.innerText = "vitória player2"
        mensagemVitória.style.color = "#DC31BE"
        mensagemVitória.style.backgroundColor = "transparent"
    }
}