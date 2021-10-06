//item 1 : function by Theo
//gera tabela e injeta no html


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

//item 2.2 : function by Robert
//intercepta o clique na celular ta table
//retorna o id do target

document.querySelectorAll("div").forEach( function(div) {

    div.addEventListener("click", function(event) {
    const el = event.target
    const id = el.id;


    });

});


//item 4.4 : function by Robert


//variável que armazena a table 

let totalTableBols = document.getElementById('.table');

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

function verifyDraw(totalTableBols){
    if (totalTableBols.childElementCount === 42){
        return makeMessageDraw()
    }
}
verifyDraw();

