let grid = [];
let currentPlayer = "X";
let isWin = false;
const DIM = 3;

function setup() {
    createCanvas(600, 600);
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
}

function reset() {
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    currentPlayer = "X";
    isWin = false;
}

function mousePressed() {
    if (isWin) {
        reset();
        return;
    }

    let i = floor(mouseX / width * DIM);
    let j = floor(mouseY / height * DIM);

    if (grid[j][i] == "") {
        grid[j][i] = currentPlayer
        checkWinner();
    }   
    currentPlayer = currentPlayer == "X"?"O":"X"
}

function checkWinner() {
    isWin = false;
    for (let i = 0; i < DIM; i++) {
        if (((grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) && grid[i][0] != "") || 
            (((grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) && grid[0][i] != ""))) {
                isWin = true;
            break;
        }
    }
    if (((grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) && grid[0][0] != "") || 
        (((grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0]) && grid[0][2] != ""))) {
            isWin = true;
    }

    if (isWin) console.log(currentPlayer + " wins");
}

function draw() {
    background(0);
    const w = width / DIM;
    const h = height / DIM;
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let x = i * w;
            let y = j * h;
            let r = w / 1.2

            fill(255);
            stroke(0)
            rect(x, y, w, h);
            
            if (grid[j][i] == "O") {
                ellipse(x + w / 2, y + h / 2, w / 1.5);
            }

            else if (grid[j][i] == "X") {
                line(x + r, y + r, x + w - r, y + h - r);
                line(x + w - r, y + r, x + r, y + h - r);
            }
        }
    }
}