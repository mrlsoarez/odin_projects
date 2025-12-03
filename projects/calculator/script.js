
class Calculator {
    static dict = {
        "sum": (a, b) => a + b,

        "sub": (a, b) => a - b, 

        "mult": (a, b) => a * b, 
        
        "div": (a, b) => a / b
    };

    calculate(id, a, b) {
        let r = null;
        Object.keys(Calculator.dict).forEach(key => {
            if (key == id) {
                r = Calculator.dict[key](a, b);
            }
        });
        return r;
    }

}

let history = document.querySelector(".History");

function update_history(div) {
    history.innerHTML += div;
}

function clear_history() {
    history.innerHTML = "";
}

let button = document.querySelectorAll("button");
let calculator = new Calculator;

let value_a = null; 
let value_b = null;
let display = "";
let operator = "";

button.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.className == "Number") {
            display += btn.id; 
            update_history(btn.id);
        }
        
        if (btn.className == "Operator") {
            
            if (operator.id != "equal") {
                operator = btn.id; 
                update_history(btn.innerHTML);
            }

            if (value_a == null) {
                value_a = parseFloat(display); 
            }
            else {
                value_b = parseFloat(display); 
            }
        
            display = "";

            if (value_a != null && value_b != null) {
         
                let result = calculator.calculate(btn.id, value_a, value_b);

                update_history("=" + result);
                value_a = result; 
                value_b = null; 
                
            }
            
        }
    })
})

