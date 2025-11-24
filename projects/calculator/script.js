class Calculadora {

    static OPERACOES = {"+": "soma", "-": "sub"}

    constructor(valor_a, operacao = null, valor_b = null) {
        this.valor_a = valor_a;
    }

    soma(a, b) {
        return (a + b);
    }

    getOperacao(valor) {

        if (valor == "+") {
            this.operacao = this.soma;
        }
        
    }

    setValorB(valor) {
        this.valor_b = valor
    }

}

let valor_a = null; 
let valor_b = null;
let first_operation = true;
let operator = null;

const DISPLAY = document.querySelector(".Display");
const HISTORY_DISPLAY = document.querySelector(".History");

let numbers = document.querySelectorAll(".Number");
let operators = document.querySelectorAll(".Operator");
let equal = document.querySelector(".Equal");

function update_history(value, remove = false) {
    let string = String(value); 
    let history_sliced = null;

    if (remove == true) {
        let history = HISTORY_DISPLAY.innerHTML;
        history_sliced = history.slice(0, string.length + 1);
        console.log(history_sliced, "hi");
    }



    HISTORY_DISPLAY.innerHTML += string; 
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {

        if (valor_b != null) {
            DISPLAY.innerHTML = "";
            update_history(valor_b, remove = true)
        }

        DISPLAY.innerHTML += number.id;
        
       
    })
})



operators.forEach((op) => {
    op.addEventListener("click", () => {
        
        let result = null; 

        if (op.id != "equal") {
            operator = op.id; 
        }

        if (first_operation == true) {
            valor_a = parseInt(DISPLAY.innerHTML);
            update_history(valor_a);
            update_history(op.innerHTML);
            DISPLAY.innerHTML = "";
            first_operation = false;
        }

        else {
            valor_b = parseInt(DISPLAY.innerHTML); 
            update_history(valor_b);
            DISPLAY.innerHTML = "";

            if (operator == "soma") {
                result = valor_a + valor_b;
            }
            else if (operator == "sub") {
                result = valor_a - valor_b;
            }

            DISPLAY.innerHTML = result; 
            valor_a = result; 
        }

        console.log(valor_a, valor_b)


        

        /*
        console.log(valor_a, valor_b);

        if (op.id != "equal") {
            operator = op.id; 
        }
        
        if (valor_a != null && valor_b == null) {

            valor_b = parseInt(DISPLAY.innerHTML);
            let result = null; 

            if (operator == "soma") {
                result = valor_a + valor_b;
            }
            else if (operator == "sub") {
                result = valor_a - valor_b;
            }

            console.log(valor_a, valor_b);
            DISPLAY.innerHTML = result; 
            valor_a = result; 
            valor_b = null;
          
             
        }

        */


       
        
    })
})

function DOM() {
    const button = document.querySelectorAll(".Number");
    const operators = document.querySelectorAll(".Operator");


    button.forEach((btn) => {
        btn.addEventListener("click", () => {
            p.textContent += btn.innerHTML;
        })
    })

    operators.forEach((op) => {
        op.addEventListener("click", () => {

            let display_number = parseFloat(display.textContent);
            
            if (calculadora == null) {
                calculadora = new Calculadora(display_number);  
                p.textContent = "";
            }
            else {
                calculadora.getOperacao(op.textContent);
                if (calculadora.valor_b == null) {
                    
                    calculadora.setValorB(display_number);
                    result = calculadora.operacao(calculadora.valor_a, calculadora.valor_b);            
                    
                    p.textContent = "";
                    p.textContent = result;
                    calculadora.valor_a = result;
                    calculadora.valor_b = null;
                }
            }
        

            
            
        
        })

             
        })
}


let calculadora = null; 

/* DOM() */