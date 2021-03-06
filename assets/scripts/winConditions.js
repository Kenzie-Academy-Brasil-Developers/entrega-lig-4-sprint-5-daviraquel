function verifyDraw(){
    const player1Discs = document.querySelectorAll('.player1').length
    const player2Discs = document.querySelectorAll('.player2').length
    if(player1Discs > 0){
        if(player1Discs + player2Discs === 42){
            makeMessageDraw()
        }
    }
}

function horizontalWin(){
    for (let col = 0; col < 4; col++){
        for (let row = 0; row < 6; row++){
            if (tableCol[col].children[row].lastChild &&
                tableCol[col+1].children[row].lastChild &&
                tableCol[col+2].children[row].lastChild &&
                tableCol[col+3].children[row].lastChild !== null) {
                if (tableCol[col].children[row].lastChild.className === tableCol[col+1].children[row].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col+2].children[row].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col+3].children[row].lastChild.className) {
                        return true;
                    };
            };
        };
    };
    return false;
};

function verticalWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 3; row < 6; row++){
            if (tableCol[col].children[row].lastChild !== null) {
                if (tableCol[col].children[row].lastChild.className === tableCol[col].children[row-1].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col].children[row-2].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col].children[row-3].lastChild.className) {
                        return true;
                    };
            };
        };
    };
    return false;
};

function diagonalLeftWin(){
    for (let col = 3; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (tableCol[col].children[row].lastChild &&
                tableCol[col-1].children[row+1].lastChild &&
                tableCol[col-2].children[row+2].lastChild &&
                tableCol[col-3].children[row+3].lastChild !== null) {

                if (tableCol[col].children[row].lastChild.className === tableCol[col-1].children[row+1].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col-2].children[row+2].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col-3].children[row+3].lastChild.className) {
                        return true;
                    };
            }
        };
    };
    return false;
};

function diagonalRightWin(){
    for (let col = 0; col < 4; col++){
        for (let row = 0; row < 3; row++){
            if (tableCol[col].children[row].lastChild &&
                tableCol[col+1].children[row+1].lastChild &&
                tableCol[col+2].children[row+2].lastChild &&
                tableCol[col+3].children[row+3].lastChild !== null) {

                if (tableCol[col].children[row].lastChild.className === tableCol[col+1].children[row+1].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col+2].children[row+2].lastChild.className &&
                    tableCol[col].children[row].lastChild.className === tableCol[col+3].children[row+3].lastChild.className) {
                        return true;
                    };
            }
        };
    };
    return false;
};