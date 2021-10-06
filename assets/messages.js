//empate
const mSn = 'Deu empate!';

//função que gera uma div com a menssagem de empate

function makeMessageDraw(){
    const boxMsn = document.querySelector("#boxMsn")
    const msn = document.createElement('div')
    msn.innerText = mSn
    boxMsn.appendChild(msn)
}
makeMessageDraw()

//vitória
function winMessage(){
    let mensagemVitória = document.querySelector(".showPlayer")
    if(counter === 1){
        mensagemVitória.innerText = "vitória player1"
    }else{
        mensagemVitória.innerText = "vitória player2"
    }
}