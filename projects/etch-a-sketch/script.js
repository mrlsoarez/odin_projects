
function main() {
    const GRID = document.querySelector(".Grid");
    fillGrid(GRID, 4);
}

function fillGrid(grid, number_per_row) {

    number_of_columns = number_per_row ** 2;

    grid.style.gridTemplateColumns = `repeat(${number_per_row}, 1fr)`
    
    for (let i = 0; i < number_of_columns; i++) {
        let div = document.createElement("div"); 
        div.className = "Row";
        grid.appendChild(div);
    }
}

main();