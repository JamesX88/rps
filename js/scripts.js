function computerPlay(){
    let choice = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    return choice;
}

function rpsRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    alert('The round is a draw! No points awarded.');
                    break;
                case 'paper':
                    return 'computer';
                case 'scissors':
                    return 'player';
                default:
                    break;
            }
            break;
        case 'paper':
            switch(computerSelection){
                case 'rock':
                    return 'player';
                case 'paper':
                    alert('The round is a draw! No points awarded.');
                    break;
                case 'scissors':
                    return 'computer';
                default:
                    break;
            }
            break;
        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    return 'computer';
                case 'paper':
                    return 'player';
                case 'scissors':
                    alert('The round is a draw! No points awarded.');
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    const ps = document.querySelector('.playerScore');
    const cs = document.querySelector('.computerScore');

    const buttons = document.querySelectorAll('button');
    let playerSelection = "";

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            while(playerWins < 5 || computerWins < 5){
                if(button.id === 'rock'){
                    let winner = rpsRound(button.id, computerPlay());
                    if (winner === 'player'){
                        playerWins++;
                        ps.innerHTML = playerWins;
                    }else if (winner === 'computer'){
                        computerWins++;
                        cs.innerHTML = computerWins;
                    } else{
                    }
                } else if(button.id === 'paper'){
                    let winner = rpsRound(button.id, computerPlay());
                    if (winner === 'player'){
                        playerWins++;
                        ps.innerHTML = playerWins;
                    }else if (winner === 'computer'){
                        computerWins++;
                        cs.innerHTML = computerWins;
                    } else{
                    }
                } else{
                    let winner = rpsRound(button.id, computerPlay());
                    if (winner === 'player'){
                        playerWins++;
                        ps.innerHTML = playerWins;
                    }else if (winner === 'computer'){
                        computerWins++;
                        cs.innerHTML = computerWins;
                    } else{
                    }
                }
            }
    
        })
    })
}

game();