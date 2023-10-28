function generateMove() {
    let bestScore = -Infinity;
    let move;
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            if (grid[i][j] == "") {
                makeMove(i, j);
                let score = minimax(false, 1);
                unmakeMove(i, j);
                if (score > bestScore) {
                    bestScore = score;
                    move = [i, j];
                }      
            }       
        }
    }
    makeMove(move[0], move[1]);
    return move;
}

let scores = {
    "X": 10,
    "O": -10,
    "tie": 0
};

function minimax(isMaximizing, depth) {
    let winner = checkWinner();
    if (winner != null) {
        return scores[winner] - depth;
    }
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                if (grid[i][j] == "") {
                    makeMove(i, j);
                    bestScore = max(bestScore, minimax(false, depth + 1));
                    unmakeMove(i, j);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                if (grid[i][j] == "") {
                    makeMove(i, j);
                    bestScore = min(bestScore, minimax(true, depth + 1));
                    unmakeMove(i, j);
                }
            }
        }
        return bestScore;
    }
}
