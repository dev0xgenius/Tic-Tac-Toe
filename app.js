main();
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', () => {
    resetGame();
    main();
});

function main() {
    let gameBox = document.getElementById('gameBox');
    let TicTacToe = {
        cells: gameBox.querySelectorAll("[class *= 'item']"),
        nextTurn: 'X',

        get grid(){
            let gridData = [];
            for (let cell of this.cells) gridData.push(cell.innerText);
            return createGrid(3, gridData);
        }
    };

    for (let cell of TicTacToe.cells)
        cell.addEventListener("click", handleCellClick, {once: true});

    function handleCellClick(event) {
        event.target.querySelector(".text").
        innerHTML = TicTacToe.nextTurn;
        
        if (symbolMatch(TicTacToe["grid"], TicTacToe["nextTurn"])){
            //Stop players from clicking when match is found...
            for (let cell of TicTacToe.cells)
                cell.removeEventListener("click", handleCellClick);
            
            gameOver(TicTacToe);
            return;
        }

        TicTacToe.nextTurn = (TicTacToe.nextTurn == 'X') ? 'O' : 'X';
    }
}

function createGrid(width, array) {
    let grid = [];

    for (let row = 0; row < width; row++) {
        for (let j = 0; j < width; j++) {
            if (typeof grid[row] != 'object') grid[row] = [];
            grid[row].push(array[j]);

        } array = array.slice(3, array.length);
    }
    return grid;
}

function symbolMatch(grid, symbol) {
    let matchs = [diagonalMatch, horizontalMatch, verticalMatch];
    for (let match of matchs)
        if (match(grid, symbol)) return true;

    return false;
}

function gameOver(gameObj){
    let info = document.querySelector('.info-1');
    info.innerHTML = `Winner: Player ${gameObj.nextTurn}`;    
}

function resetGame() {
    let cells = document.querySelectorAll("[class *= item]");
    for (let cell of cells) cell.querySelector(".text").innerHTML = "";

    document.querySelector(".info-1").innerHTML = "Winner: ";
}

function diagonalMatch(grid, symbol) {
    let diagonals = [];
    let count = 1;

    diagonals.push(grid.map((arr, index) => arr[index]));
    diagonals.push(grid.map((arr) => {
        return arr[arr.length - count++];
    }));
    
    for (let diagonal of diagonals)
        if (!diagonal.some(data => data != symbol)) return true;

    return false;
}

function horizontalMatch(grid, symbol) {
    let gridWidth = grid.length;

    for (let row = 0; row < gridWidth; row++)
        if (!grid[row].some(data => data != symbol)) return true;
    return false;
}

function verticalMatch(grid, symbol) {
    let gridWidth = grid.length;
    let column = null;

    for (let colNo = 0; colNo < gridWidth; colNo++){
        column = grid.map(arr => arr[colNo]);  
        if (!column.some(data => data != symbol)) return true;
    } return false;
}