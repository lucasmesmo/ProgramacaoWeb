function generateTable(mult) {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    const tblhead = document.createElement("thead");
    const headrow = document.createElement("tr");
    const headcell = document.createElement("th")
    const tblheadtxt = document.createTextNode(`Produtos de ${mult}`);
    headcell.setAttribute("colspan", "2");
    headcell.style.fontWeight = "bold";
    headcell.appendChild(tblheadtxt);
    headrow.appendChild(headcell);
    tblhead.appendChild(headrow);
    tbl.appendChild(tblhead);

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {

            const cell = document.createElement("td");
            let cellText = document.createTextNode(`strerro`);

            if (j == 0) {
                cellText = document.createTextNode(`${i + 1}x${mult}`);
            }
            else {
                cellText = document.createTextNode(mult * (i + 1));
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");

    const container = document.querySelector(".table-container");
    container.appendChild(tbl);

}

function gera_tabelas_multiplicacao() {
    const container = document.createElement("div");
    container.className = "table-container";
    document.body.appendChild(container);

    for (let y = 1; y < 11; y++) {
        generateTable(y);
    }

}