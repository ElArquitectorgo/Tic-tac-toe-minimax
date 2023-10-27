let grid = [];
const DIM = 3;

function setup() {
    createCanvas(600, 600);
    grid = [
        ["", "X", ""],
        ["", "O", "X"],
        ["", "X", "O"]
    ]
}

function mousePressed() {
    let i = floor(mouseX / width / DIM);
    let j = floor(mouseY / height / DIM);

    if (grid[j][i] == "") grid[j][i] = "X";
    
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