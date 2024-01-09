
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    if(random == 1)
        return "rock";
    if(random == 2)
        return "paper";
    else
        return "scissors";
}

const results = document.querySelector(".result");
const playerPoints = document.querySelector(".playerPoints");
const computerPoints = document.querySelector(".computerPoints");

let playerPointsCounter = 0;
let computerPointsCounter = 0;

function tie(){
    let theFirstChild = results.firstChild;
    const tie = document.createElement("p");
    tie.textContent = "Tie!";
    //results.appendChild(tie);
    results.insertBefore(tie, theFirstChild);
}

function computerWin(){
    let theFirstChild = results.firstChild;
    const computerWin = document.createElement("p");
    computerWin.textContent = "Computer Win!";
    computerWin.style.color = "red";
    //results.appendChild(computerWin);
    results.insertBefore(computerWin, theFirstChild);
    computerPoints.textContent = "Computer Points: " + ++computerPointsCounter;
}

function playerWin(){
    let theFirstChild = results.firstChild;
    const playerWin = document.createElement("p");
    playerWin.textContent = "Player Win!";
    playerWin.style.color = "green";
    //results.appendChild(playerWin);
    results.insertBefore(playerWin, theFirstChild);
    playerPoints.textContent = "Player Points: " + ++playerPointsCounter;
}

function computerWinPrompt(){
    let theFirstChild = results.firstChild;
    const endGame = document.createElement("p");
    endGame.textContent = "!!!GAME OVER YOU LOSE!!!";
    endGame.style.color = "red";
    results.insertBefore(endGame, theFirstChild);
}

function playerWinPrompt(){
    let theFirstChild = results.firstChild;
    const endGame = document.createElement("p");
    endGame.textContent = "!!!GAME OVER YOU WIN!!!";
    endGame.style.color = "gold";
    results.insertBefore(endGame, theFirstChild);
}

function disableAll(){
    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
    //ffbtn.disabled = true;
}

/*function ff(){
    disableAll();
    let child = results.lastElementChild;
    while (child) {
        results.removeChild(child);
        child = results.lastElementChild;
    }
    playerPoints.textContent = "Player Points: -9999 LP";
    computerPoints.textContent = "Computer Points: +32 LP";
    const endGame = document.createElement("p");
    endGame.textContent = "!!!YOU SUCK!!!";
    endGame.style.color = "red";
    endGame.style.fontWeight = "bolder";
    endGame.style.fontSize = "40px";
    results.appendChild(endGame);
}*/

function play(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            tie();
        }
        if(computerSelection == "paper"){
            computerWin()
        }
        if(computerSelection == "scissors"){
            playerWin()
        }
    }

    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerWin();
        }
        if(computerSelection == "paper"){
            tie();
        }
        if(computerSelection == "scissors"){
            computerWin();
        }
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            computerWin();
        }
        if(computerSelection == "paper"){
            playerWin();
        }
        if(computerSelection == "scissors"){
            tie();
        }
    }  


    if(playerPointsCounter >= 5 || computerPointsCounter >= 5){
        disableAll();
    }
    if(playerPointsCounter >= 5){
        playerWinPrompt();
    }
    if(computerPointsCounter >= 5){
        computerWinPrompt();
    }
}

const rockbtn = document.querySelector(".rock");
rockbtn.addEventListener('click', function(){
    play("rock", getComputerChoice())});

const paperbtn = document.querySelector(".paper");
paperbtn.addEventListener('click', function(){
    play("paper", getComputerChoice())});

const scissorsbtn = document.querySelector(".scissors");
scissorsbtn.addEventListener('click', function(){
    play("scissors", getComputerChoice())});

/*const ffbtn = document.querySelector(".ff");
ffbtn.addEventListener('click', function(){
    ff();
})*/



