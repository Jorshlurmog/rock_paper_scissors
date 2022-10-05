let playerScore = 0;
let computerScore = 0;

const getPlayerChoice = () => {
    const weapons = ['rock', 'paper', 'scissors']
    let choice = prompt('Choose rock, paper, or scissors: ').toLowerCase();
    return choice;
}

const getComputerChoice = () => {
    const weapons = ['rock', 'paper', 'scissors'];
    let choice = weapons[Math.floor(Math.random() * weapons.length)];
    return choice;
}

const playRound =  (playerSelection, computerSelection) => {
    let winMessage = `You Win! Your ${playerSelection} beats the computer's ${computerSelection}!`;
    let lostMessage = `You Lost! The computer's ${computerSelection} beats your ${playerSelection}!`;
    let drawMessage = `Draw! You both chose ${playerSelection}!`;

    const winRound = () => {
        playerScore += 1;
        alert(winMessage);
    }
    
    const loseRound = () => {
        computerScore += 1;
        alert(lostMessage);
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
            alert(drawMessage);
        }

    alert("Player score: ", playerScore);
    alert("Computer score: ", computerScore);
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        alert(`Round ${i + 1}`);
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        alert("Congratulations! You are the winner!")
    } else if (playerScore < computerScore) {
        alert("Aww, that's too bad! You lose!")
    } else {
        alert("Looks like it's a draw.")
    }
}

game();