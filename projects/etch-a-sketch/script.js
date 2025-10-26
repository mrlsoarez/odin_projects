

class ColorPicker {
    constructor(actual_color, size) {
        this.actual_color = actual_color;
        this.size = size;
    }

    getCSSProperty(elem) {
        const style = window.getComputedStyle(elem, null);
        return style["background-color"];
    }
}



function main() {

    picker = new ColorPicker("rgb(255, 0, 0)", 5); 

    const picked = document.querySelector(".Picked")
    const GRID = document.querySelector(".Grid");
    
    fillGrid(GRID, picker.size);
    updatePickedColor(picked, picker.actual_color);

    const colors = document.querySelectorAll(".Color.Square"); 

    colors.forEach((btn) => {
        btn.addEventListener("click", () => {
            picker.actual_color = picker.getCSSProperty(btn);
            updatePickedColor(picked, picker.actual_color);
        })
    })
    
    rows = document.querySelectorAll(".Row")

    rows.forEach((row) => row.addEventListener("mousedown", () => {
        row.style.background = picker.actual_color;
    }))
    
}

function updatePickedColor(div, color) {
    div.style.background = color;
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