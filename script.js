
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    if(random == 1)
        return "rock";
    if(random == 2)
        return "paper";
    else
        return "scissors";
}

function play(playerSelection, computerSelection){
    console.log("you chose: " + playerSelection)
    console.log("computer chose: " + computerSelection)
    if(playerSelection == "rock"){
        if(computerSelection == "rock")
            return "Tie";
        if(computerSelection == "paper")
            return "Lose! Paper beats Rock";
        else
            return "Win! Rock beats Scissors";
    }

    if(playerSelection == "paper"){
        if(computerSelection == "rock")
            return "Win! Paper beats Rock";
        if(computerSelection == "paper")
            return "Tie";
        else
            return "Lose! Scissors beats Paper";
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "rock")
            return "Lose! Rock beats Scissors";
        if(computerSelection == "paper")
            return "Win! Scissors beats Paper";
        else
            return "Tie";
    }  
}

function game(){
    let Pwin = 0;
    let Cwin = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Input RPS choice: ")
        playerSelection = playerSelection.toLowerCase();
        let result = play(playerSelection, getComputerChoice())
        if(result.slice(0, 3) == "Win"){
            Pwin++;
            console.log("you gain a point")
        }
        if(result.slice(0, 3) == "Los"){
            Cwin++
            console.log("computer gains a point")
        }
        if(result.slice(0, 3) == "Tie"){
            console.log("Tie, no point!");
        }
        console.log("Player: " + Pwin + " Computer: " + Cwin);
    }
        if(Pwin >> Cwin)
            console.log("!!!YOU WIN!!!")
        if(Cwin >> Pwin)
            console.log("!!!YOU LOSE!!!")
        if(Pwin == Cwin)
            console.log("!!!YOU TIE!!!")
    }

game();
