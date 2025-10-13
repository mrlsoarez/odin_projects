let humanScore = 0
let computerScore = 0
/*
function getComputerChoice() {
    let array = ["ROCK", "PAPER", "SCISSORS"]
    return array[Math.floor(Math.random() * 3)]
}

function getHumanChoice(choice) {
    console.log(choice)
}


function playRound(human, computer, round) {
    
    let ONE_BEATS_THE_OTHER = {
    "ROCK": "SCISSORS",
    "SCISSORS": "PAPER",
    "PAPER": "ROCK" 
    }

    console.log("=======", human, computer, "==============")

    for (const [key, value] of Object.entries(ONE_BEATS_THE_OTHER)) {
        
        if (computer == key && human == key) {
            console.log(`Its a tie this ${round}ª round!`)
        }
        if (computer == key && human == value ){
            console.log(`Computer won this ${round}ª round!`)
            computerScore += 1
            break
        }
        else if (human == key && computer == value) {
            console.log(`Human won this ${round}ª round!`) 
            humanScore += 1
            break
        }
    
    }

}
*/
function getDOMInteractions() {

    function displayPlayerChoice(player_choice) {
        let display = document.querySelector(".Display");
        display.innerHTML = "";
        let p = document.createElement("p");
        p.textContent = player_choice;
        display.append(p);
    }

    buttons = document.querySelectorAll(".Button")
   
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            displayPlayerChoice(btn.id)
        })
    })

}

getDOMInteractions()
