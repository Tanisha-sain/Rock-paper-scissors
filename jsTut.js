let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    };
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`;
}

updateScoreElement();




function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = ' ';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove;
}



function playGame(playerMove, computerMove) {
    let result = ' ';

    if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            result = 'Tie.';
            score.tie++;
        } else if (computerMove === 'paper') {
            result = 'You lose.';
            score.lose++
        } else if (computerMove === 'scissors') {
            result = 'You win.';
            scorescore.win++;
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie.';
            score.tie++;
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
            score.lose++;
        } else if (computerMove === 'rock') {
            result = 'You win.';
            score.win++;
        }

    } else if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
            result = 'Tie.';
            score.tie++;
        } else if (computerMove === 'rock') {
            result = 'You lose.';
            score.lose++;
        } else if (computerMove === 'paper') {
            result = 'You win.';
            score.win++;
        }
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You  <img src = "https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png" alt = "${playerMove}" class="img1">  <img src = "https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove}-emoji.png" alt = "${computerMove}" class="img1">  Computer`;

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`);
}


