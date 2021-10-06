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

