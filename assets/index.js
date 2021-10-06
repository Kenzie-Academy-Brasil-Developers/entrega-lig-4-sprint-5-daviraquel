let tableRow = document.getElementsByClassName('cel');
let tableCol = document.getElementsByClassName('column');
// win condition vertical
function verticalWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (tableCol[col].children[row].children.style.backgroundColor === tableCol[col].children[row+1].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor === tableCol[col].children[row+2].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor === tableCol[col].children[row+3].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor !== 'white') {
                    return true;
                };
        };
    };
};

//win condition diagonal left
function diagonalLeftWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (tableCol[col].children[row].children.style.backgroundColor === tableCol[col-1].children[row+1].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor === tableCol[col-2].children[row+2].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor === tableCol[col-3].children[row+3].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor !== 'white') {
                    return true;
                };
        };
    };
};

//win condition diagonal right
function diagonalRightWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (tableCol[col].children[row].children.style.backgroundColor === tableCol[col+1].children[row+1].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor === tableCol[col+2].children[row+2].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor === tableCol[col+3].children[row+3].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor !== 'white') {
                    return true;
                };
        };
    };
};

function geraArray(colunas, linhas) {

    const body = document.querySelector('body')
    const table = document.createElement('section')
    table.setAttribute('class', 'table')
    body.appendChild(table)

    for (let i = 0; i <= colunas - 1; i++) {

        const divBoard = document.createElement('div')
        divBoard.setAttribute('class', 'column')
        divBoard.addEventListener("click", addDisc)
        table.appendChild(divBoard)

        for (let o = 0; o <= linhas; o++) {

            const divCel = document.createElement('div')
            divCel.setAttribute('class', 'cel')
            divBoard.appendChild(divCel)
        }
    
    }
    return 
}

geraArray(7,6)

let counter = 0
function addDisc(evt){
    // implementando mostrador de player (vez do:)
    const mostraPlayer = document.querySelector('.showPlayer')

    let disc = document.createElement("div")

    for(i = 0; i < evt.currentTarget.children.length; i++){
        if(evt.currentTarget.children[i].children.length === 0){
            if(counter === 0){
                disc.className = "player1"
                evt.currentTarget.children[i].appendChild(disc)
                counter = 1
                mostraPlayer.innerText = 'Vez do Player 1'
                break
            }
            if(counter === 1){
                disc.className = "player2"
                evt.currentTarget.children[i].appendChild(disc)
                counter = 0
                mostraPlayer.innerText = 'Vez do Player 2'
                break
            }
            
        }
    }

}

//item 4.4 : function by Robert
//variável que armazena a table 

let totalTableBols = document.querySelector('.table');

const mSn = 'Deu empate!';

//função que gera uma div com a menssagem de empate

function makeMessageDraw(mSn){
    const boxMsn = document.querySelector("#boxMsn")
    const msn = document.createElement('div')
    msn.innerText = mSn;
    boxMsn.appendChild(msn);
    return msn;
}
makeMessageDraw()

//função que verifica a quantidade de elementos dentro da Table
//caso condição satisfeita retorna div com menssagem de empate

// function verifyDraw(totalTableBols){
//     if (totalTableBols.childElementCount === 42){
//         return makeMessageDraw()
//     }
// }
// verifyDraw();

// Função Reset

function resetGame(){
    
    const celulas = document.querySelectorAll('.cel')

    celulas.forEach(function(celula){
        celula.innerHTML = ''
    })
}

const buttonReset = document.querySelector('.buttonReset')

buttonReset.addEventListener('click', resetGame)