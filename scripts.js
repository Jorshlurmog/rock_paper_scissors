let playerScore = 0;
let computerScore = 0;
let playerGames = 0;
let computerGames = 0

const rpsbuttons = document.querySelectorAll('button');
const results = document.querySelector('.results');
const details = document.querySelector('.details');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const gameTally = document.querySelector('.gameTally');

rpsbuttons.forEach(button => {
    button.addEventListener('click', () => {
    let playerSelection = button.id;
    playRound(playerSelection);
    })
})

const getComputerChoice = () => {
    const weapons = ['rock', 'paper', 'scissors'];
    let choice = weapons[Math.floor(Math.random() * weapons.length)];
    return choice;
}

const playRound =  (playerSelection) => {
    let computerSelection = getComputerChoice();
    let winMessage = 'You Win!';
    let winDetails = `Your ${playerSelection} beats the computer's ${computerSelection}!`;
    let lostMessage = 'You Lost!' ;
    let lostDetails = `The computer's ${computerSelection} beats your ${playerSelection}!`;
    let drawMessage = 'Draw!'
    let drawDetails =  `You both chose ${playerSelection}!`;
    gameTally.textContent = `Player Wins: ${playerGames}   Computer Wins: ${computerGames}`

    const winRound = () => {
        results.textContent = winMessage;
        details.textContent = winDetails;
        playerScore += 1;  
    }
    
    const loseRound = () => {
        results.textContent = lostMessage;
        details.textContent = lostDetails;
        computerScore += 1;
    }

    switch (true) {
        case playerSelection === 'rock' && computerSelection === 'paper':
            loseRound();
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            loseRound();
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            loseRound();
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            winRound();
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            winRound();            
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            winRound();            
            break;
        default:
            results.textContent = drawMessage;
            details.textContent = drawDetails;
        }

    player.textContent = `Player score: ${playerScore}` 
    computer.textContent = `Computer score: ${computerScore}`;
    
    if (playerScore === 5) {
        results.textContent = 'Congratulations! You win!';
        playerScore = 0
        computerScore = 0
        playerGames += 1
        details.textContent = 'Thanks for playing!';
    } else if (computerScore === 5) {
        results.textContent = 'Aww! The computer wins this time!';
        playerScore = 0
        computerScore = 0
        computerGames += 1
        details.textContent = 'Thanks for playing!';
    }
}


