
function horizontalWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (tableCol[col].children[row+1].children.style.backgroundColor === tableCol[col].children[row].children.style.backgroundColor &&
                tableCol[col].children[row+2].children.style.backgroundColor === tableCol[col].children[row].children.style.backgroundColor &&
                tableCol[col].children[row+3].children.style.backgroundColor === tableCol[col].children[row].children.style.backgroundColor &&
                tableCol[col].children[row].children.style.backgroundColor !== 'white') {
                    return true;
                };
        };
    };
};