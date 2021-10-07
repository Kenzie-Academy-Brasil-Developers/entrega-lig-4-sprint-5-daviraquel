let tableRow = document.getElementsByClassName('cel');
let tableCol = document.getElementsByClassName('column');

function geraArray(colunas, linhas) {

    const table = document.querySelector('.table')
    // const body = document.querySelector('body')
    // const table = document.createElement('section')
    // table.setAttribute('class', 'table')
    // body.appendChild(table)

    for (let i = 0; i <= colunas - 1; i++) {

        const divBoard = document.createElement('div')
        divBoard.setAttribute('class', 'column')
        divBoard.addEventListener("click", addDisc)
        table.appendChild(divBoard)

        for (let o = 0; o <= linhas -1; o++) {

            const divCel = document.createElement('div')
            divCel.setAttribute('class', 'cel')
            divBoard.appendChild(divCel)
        }
    
    }
    return 
}

geraArray(7,6)

let counter = 0

const mostraPlayer = document.querySelector('.showPlayer')

function addDisc(evt){
    // implementando mostrador de player (vez do:)

    let disc = document.createElement("div")

    for(i = 0; i < evt.currentTarget.children.length; i++){
        if(evt.currentTarget.children[i].children.length === 0){
            if(counter === 0){
                disc.className = "player1"
                evt.currentTarget.children[i].appendChild(disc)
                counter = 1
                mostraPlayer.innerText = 'Vez do Player 2'
                mostraPlayer.style.color = "#E5CEA4"
                break
            }
            if(counter === 1){
                disc.className = "player2"
                evt.currentTarget.children[i].appendChild(disc)
                counter = 0
                mostraPlayer.innerText = 'Vez do Player 1'
                mostraPlayer.style.color = "#E5CEA4"
                break
            }
            
        }
    }
    let horizontal = horizontalWin()
    let vertical = verticalWin()
    let diagonalLeft = diagonalLeftWin()
    let diagonalRight = diagonalRightWin()
    let draw = verifyDraw()
    if(horizontal === true ||vertical === true || diagonalLeft === true|| diagonalRight === true){
        winMessage()
        remEvents()
    }
    if(draw === true){
        makeMessageDraw()
    }
}



// Função Reset
function resetGame(){
    const celulas = document.querySelectorAll('.cel')

    celulas.forEach(function(celula){
        celula.innerHTML = ''
    })
    mostraPlayer.innerText = 'Vez do Player 1'
    mostraPlayer.style.color = "#E5CEA4"
    mostraPlayer.style.backgroundColor = "transparent"
    counter = 0
    addEvents()
}

function remEvents(){
    const colunas = document.querySelectorAll('.column')
    for(i = 0; i < colunas.length; i++){
        colunas[i].removeEventListener("click", addDisc)
    }
}

function addEvents(){
    const colunas = document.querySelectorAll('.column')
    for(i = 0; i < colunas.length; i++){
        colunas[i].addEventListener("click", addDisc)
    }
}

const buttonReset = document.querySelector('.buttonReset')
buttonReset.addEventListener('click', resetGame)