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
//function by Theo


function geraArray(colunas, linhas) {

    const body = document.querySelector('body')
    const table = document.createElement('section')
    table.setAttribute('class', 'table')
    body.appendChild(table)

    for (let i = 0; i <= colunas - 1; i++) {

        const divBoard = document.createElement('div')
        divBoard.setAttribute('class', 'column')
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

//function by Robert

document.querySelectorAll("div").forEach( function(div) {

    div.addEventListener("click", function(event) {
    const el = event.target
    const id = el.id;


    });

});

