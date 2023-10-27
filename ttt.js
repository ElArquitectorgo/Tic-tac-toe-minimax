let grid = [];
let currentPlayer = 0;
const DIM = 3;

function setup() {
    createCanvas(600, 600);
    grid = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
}

function mousePressed() {
    let i = floor(mouseX / width * DIM);
    let j = floor(mouseY / height * DIM);

    if (grid[j][i] === "" && currentPlayer == 0) {
        grid[j][i] = "X";
        currentPlayer = 1;
    } else if (grid[j][i] === "" && currentPlayer == 1) {
        grid[j][i] = "O";
        currentPlayer = 0;
    }
    
}

function checkWinner() {
    for (let i = 0; i < DIM; i++) {
        if (grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2] && grid[i][0] != "") {
            console.log("X wins");
        }
    }
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
    checkWinner();
}