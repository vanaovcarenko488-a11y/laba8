let userScore = 0;
let compScore = 0;

function playRound() {
    let userNum = Math.floor(Math.random() * 10) + 1;
    let compNum = Math.floor(Math.random() * 10) + 1;

    document.getElementById("user-num").innerText = userNum;
    document.getElementById("comp-num").innerText = compNum;

    if (userNum > compNum) {
        userScore++;
    } else if (compNum > userNum) {
        compScore++;
    }

    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;

    if (userScore === 3 || compScore === 3) {
        let winner = userScore === 3 ? "User" : "Computer";
        setTimeout(() => {
            alert(`Гра закінчена! Переміг: ${winner}`);
            resetGame();
        }, 100);
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    document.getElementById("user-score").innerText = "0";
    document.getElementById("comp-score").innerText = "0";
    document.getElementById("user-num").innerText = "?";
    document.getElementById("comp-num").innerText = "?";
}