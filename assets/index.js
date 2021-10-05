// win condition vertical
function verticalWin(){
    for (let col = 0; col < 7; col++){
        for (let row = 0; row < 3; row++){
            if (disk.color[row][col] === disk.color[row+1][col] &&
                disk.color[row][col] === disk.color[row+2][col] &&
                disk.color[row][col] === disk.color[row+3][col] &&
                disk.color[row][col] !== 'white') {
                    return true;
                };
        };
    };
};