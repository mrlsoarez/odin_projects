let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let array = ["ROCK", "PAPER", "SCISSORS"]
    return array[Math.floor(Math.random() * 3)]
}

function getHumanChoice(choice) {
    while (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        choice = prompt("Try again! Choose one of the options.: ROCK, PAPER or SCISSORS").toUpperCase()
    }
    return choice.toUpperCase()
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


for (let i = 0; i < 5; i ++) {

    let human_choice = getHumanChoice(prompt("What is your choice? Rock, Paper or Scissors?").toUpperCase())
    let computer_choice = getComputerChoice()

    playRound(human_choice, computer_choice, i + 1)

}

console.log("=====================RESULT==================")
if (computerScore > humanScore) { console.log (`Computer won with ${computerScore} points!`)}
else if (humanScore > computerScore) { console.log(`Human won with ${humanScore} points!`)}
else { console.log("It's a tie!") }