
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

let value_a = NaN; 
let value_b = NaN;
let display = "";
let operator = "";

let operator_visor_flag = false;
let first_operation = false; 


button.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.className == "Number") {
            
            if (first_operation) {
                clear_history();
                let symbol = "";

                if (operator == "sum") {symbol = "+"}
                else if (operator == "sub") {symbol = "-"}
                else if (operator == "mult") {symbol = "*"}
                else if (operator == "div") {symbol = "/"}
              
                update_history(`${value_a} ${symbol} `);
                first_operation = false;
            }

            display += btn.id; 
            update_history(btn.id);
        }
        
        if (btn.className == "Operator") {

            if (btn.id != "equal" && first_operation) {

                first_operation = false;
                clear_history();
                operator_visor_flag = false;

                update_history(`${value_a}`)
                
            }

            if (btn.id == "clear") {
                clear_history();
                value_a = NaN;
                value_b =  NaN;
                operator = "";
            }

            if (btn.id != "equal" && operator_visor_flag == false) {
                operator = btn.id; 
            }

            if (isNaN(value_a)) {
                value_a = parseFloat(display); 
            }
            else {
                value_b = parseFloat(display); 
            }
                    
            if (operator_visor_flag == false && !(isNaN(value_a))) {
                update_history(` ${btn.innerHTML} `);
                operator_visor_flag = true;
            }

            display = "";

            if (!(isNaN(value_a)) && !(isNaN(value_b))) {
         
                let result = calculator.calculate(operator, value_a, value_b);
                update_history(" = " + result);

                value_a = result; 
                value_b = NaN; 

                first_operation = true;
                
            }
            
        }
    })
})

