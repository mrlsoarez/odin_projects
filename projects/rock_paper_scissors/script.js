let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    let array = ["ROCK", "PAPER", "SCISSORS"]
    return array[Math.floor(Math.random() * 3)]
}


function getHumanChoice(choice) {
    console.log(choice)
}

    
function playRound(human, computer) {
    
    round += 1; 

    let ONE_BEATS_THE_OTHER = {
    "ROCK": "SCISSORS",
    "SCISSORS": "PAPER",
    "PAPER": "ROCK" 
    }

    for (const [key, value] of Object.entries(ONE_BEATS_THE_OTHER)) {
        
        if (computer == key && human == key) {
            return `Its a tie this ${round}ª round!`
        }
        if (computer == key && human == value ){
            computerScore += 1
            return `Computer won this ${round}ª round!`
        }
        else if (human == key && computer == value) {
            humanScore += 1
            return `Player won this ${round}ª round!`
        }
    
    }

}

function getDOMInteractions() {

    function renderScore()  {
        let player_score = document.querySelector(".Player-Score");
        let computer_score = document.querySelector(".Computer-Score"); 

        player_score.innerHTML = "";
        computer_score.innerHTML = "";

        computer_score.innerHTML = `Computer.: ${parseInt(computerScore)}`;
        player_score.innerHTML = `Player.: ${parseInt(humanScore)}`;

    }

    function displayMessage(class_name, message) {
        let display = document.querySelector(class_name)
        display.innerHTML = "";
        let p = document.createElement("p");
        p.textContent = message;
        display.append(p);
    }

    function finishGame() {
        let final_message = "Player won!"; 
        if (computerScore == 5)  {final_message = "Computer won!";} 
        displayMessage(".Message", final_message);
    }


    buttons_html = document.querySelectorAll(".Button");
    buttons = Array.from(buttons_html);
    renderScore(); 

    buttons_html.forEach((btn) => {

        btn.addEventListener("click", (e) => {

            let player_choice = btn.id;
            displayMessage(".Player", `Player.: ${player_choice}`);
              
            let computer_choice = getComputerChoice();
            displayMessage(".Computer", `Computer.: ${computer_choice}`);

            let message = playRound(player_choice, computer_choice);
            displayMessage(".Message", message); 

            renderScore();
            
            if (computerScore == 5 || humanScore == 5) {
               buttons.map((b) => { b.disabled = true; })
               finishGame(); 
            }
        })



    })

}

getDOMInteractions()
