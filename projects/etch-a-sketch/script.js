

class ColorPicker {
    constructor(actual_color, size) {
        this.actual_color = actual_color;
        this.size = size;
    }

    getCSSProperty(elem) {
        const style = window.getComputedStyle(elem, null);
        return style["background-color"];
    }

    getColor() {
        return this.actual_color
    }
}



function main() {

    let picker = new ColorPicker("rgb(255, 0, 0)", 5); 
    
    const picked = document.querySelector(".Picked")
    const input = document.querySelector("input");
    const GRID = document.querySelector(".Grid");
    
    fillGrid(GRID, picker);
    updatePickedColor(picked, picker.actual_color);

    const colors = document.querySelectorAll(".Color.Square"); 

    colors.forEach((btn) => {
        btn.addEventListener("click", () => {
            picker.actual_color = picker.getCSSProperty(btn);
            updatePickedColor(picked, picker.actual_color);
            fillGrid(GRID, picker);
        })
    })

    paintGrid(picker.actual_color)

    input.addEventListener("input", (e) => {
        picker.size = input.value;
        fillGrid(GRID, picker);
    })
    
}

function paintGrid(color)  {

    rows = document.querySelectorAll(".Row");


    rows.forEach((row) => row.addEventListener("mouseover", () => {
        console.log(color);
        row.style.background = color;
    }))
}

function updatePickedColor(div, color) {
    div.style.background = color;
}

function fillGrid(grid, picker) {

    grid.innerHTML = "";

    number_of_columns = picker.size ** 2;

    grid.style.gridTemplateColumns = `repeat(${picker.size}, 1fr)`
    
    for (let i = 0; i < number_of_columns; i++) {
        let div = document.createElement("div"); 
        div.className = "Row";
        grid.appendChild(div);
    }

 
    paintGrid(picker.actual_color);

}

main();