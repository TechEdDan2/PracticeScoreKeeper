// alert("Let's Play");
// Player 1 Object
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    displayScore: document.querySelector('#player1Score')
}

// Player 2 Object
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    displayScore: document.querySelector('#player2Score')
}

// Variables: gameTo, current scores for players, buttons
const gameTo = document.querySelector('#pointsToWin');
const resetBTN = document.querySelector('#resetScoreButton');
let winningScore = 3;
let isGameOver = false;

/////////////
// EVENTS //
///////////
gameTo.addEventListener('change', function () {
    // alert('change');
    winningScore = parseInt(this.value);
    gameReset();
});

p1.button.addEventListener('click', function () {
    // alert('clicked');
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    // alert('clicked');
    updateScores(p2, p1);
});

resetBTN.addEventListener('click', gameReset);

///////////////
// Functions //
///////////////
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        // alert(player.score);
        player.displayScore.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.displayScore.classList.add('has-text-success');
            opponent.displayScore.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

function gameReset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.displayScore.textContent = 0;
        p.displayScore.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}