const board = document.getElementById("chessboard");
let selected = null;

const initialPosition = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"],
];

let currentPlayer = "white";

function drawBoard() {
    board.innerHTML = "";
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.className = "square " + ((row + col) % 2 === 0 ? "white" : "black");
            square.dataset.row = row;
            square.dataset.col = col;
            square.textContent = initialPosition[row][col];
            square.addEventListener("click", handleClick);
            board.appendChild(square);
        }
    }
}

function handleClick(e) {
    const square = e.target;
    const row = parseInt(square.dataset.row);
    const col = parseInt(square.dataset.col);

    if (selected) {
        const fromRow = parseInt(selected.dataset.row);
        const fromCol = parseInt(selected.dataset.col);
        initialPosition[row][col] = initialPosition[fromRow][fromCol];
        initialPosition[fromRow][fromCol] = "";
        selected.classList.remove("selected");
        selected = null;
        currentPlayer = currentPlayer === "white" ? "black" : "white";
        drawBoard();
    } else {
        if (square.textContent !== "") {
            selected = square;
            selected.classList.add("selected");
        }
    }
}

drawBoard();
