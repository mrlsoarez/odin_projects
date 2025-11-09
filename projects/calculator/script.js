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


function DOM() {
    const button = document.querySelectorAll(".Number");
    const operators = document.querySelectorAll(".Operator");

    const display = document.querySelector(".Display");
    let p = document.createElement("p");
    display.append(p);

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
                    calculadora.valor_b = null;
                }
            }
        

            
            
        
        })

             
        })
    }


let calculadora = null; 

DOM()