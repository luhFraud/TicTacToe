const hover = document.querySelectorAll('.box');

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// Game board module
const gameBoard = (() => {
    const board = [];
    return {board};
})();

// Factory Function: Creates players
const player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;

    const changeTurns = () => {
        if (currentTurn === player1) {
            currentTurn = player2
        } else {
            currentTurn = player1
        }
    }
    
    const checkWinner = () => {
        winningConditions.forEach((item) => {
            if (gameBoard.board[item[0]] === currentTurn.getSymbol() && 
            gameBoard.board[item[1]] === currentTurn.getSymbol() && 
            gameBoard.board[item[2]] === currentTurn.getSymbol()) {
                console.log('winner' , currentTurn.getSymbol())
            }
        })
    }
    


    return {getName, getSymbol, changeTurns, checkWinner}
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');
let currentTurn = player1;



for (let i = 0; i < hover.length; i++ ) {

    hover[i].addEventListener('click', showSymbol, { once: true})

    function showSymbol() {
        hover[i].textContent = currentTurn.getSymbol();
        storeSymbol();
        currentTurn.checkWinner();
        currentTurn.changeTurns();
    }

    
    function storeSymbol() {
        
        if(`${hover[i].id}` === '0'){
            gameBoard.board[0] = (currentTurn.getSymbol());
            console.log(gameBoard.board[0])
        } else if(`${hover[i].id}` === '1') {
            gameBoard.board[1] = (currentTurn.getSymbol());
            console.log(gameBoard.board[1])
        } else if(`${hover[i].id}` === '2') {
            gameBoard.board[2] = (currentTurn.getSymbol());
            console.log(gameBoard.board[2])
        } else if(`${hover[i].id}` === '3') {
            gameBoard.board[3] = (currentTurn.getSymbol());
            console.log(gameBoard.board[3])
        } else if(`${hover[i].id}` === '4') {
            gameBoard.board[4] = (currentTurn.getSymbol());
            console.log(gameBoard.board[4])
        } else if(`${hover[i].id}` === '5') {
            gameBoard.board[5] = (currentTurn.getSymbol());
            console.log(gameBoard.board[5])
        } else if(`${hover[i].id}` === '6') {
            gameBoard.board[6] = (currentTurn.getSymbol());
            console.log(gameBoard.board[6])
        } else if(`${hover[i].id}` === '7') {
            gameBoard.board[7] = (currentTurn.getSymbol());
            console.log(gameBoard.board[7])
        } else {
            gameBoard.board[8] = (currentTurn.getSymbol());
            console.log(gameBoard.board[8])
        }

        console.log(gameBoard.board);
    }
    

    hover[i].addEventListener('mouseover', function () {

        if(`${hover[i].id}` === '0'){
            hover[i].classList.toggle('hover0');
        } else if(`${hover[i].id}` === '1') {
            hover[i].classList.toggle('hover1');
        } else if(`${hover[i].id}` === '2') {
            hover[i].classList.toggle('hover2');
        } else if(`${hover[i].id}` === '3') {
            hover[i].classList.toggle('hover3');
        } else if(`${hover[i].id}` === '4') {
            hover[i].classList.toggle('hover4');
        } else if(`${hover[i].id}` === '5') {
            hover[i].classList.toggle('hover5');
        } else if(`${hover[i].id}` === '6') {
            hover[i].classList.toggle('hover6');
        } else if(`${hover[i].id}` === '7') {
            hover[i].classList.toggle('hover7');
        } else {
            hover[i].classList.toggle('hover8');
        }
        
        
    })
    hover[i].addEventListener('mouseleave', function() {
        
        
        if(`${hover[i].id}` === '0'){
            hover[i].classList.toggle('hover0');
        } else if(`${hover[i].id}` === '1') {
            hover[i].classList.toggle('hover1');
        } else if(`${hover[i].id}` === '2') {
            hover[i].classList.toggle('hover2');
        } else if(`${hover[i].id}` === '3') {
            hover[i].classList.toggle('hover3');
        } else if(`${hover[i].id}` === '4') {
            hover[i].classList.toggle('hover4');
        } else if(`${hover[i].id}` === '5') {
            hover[i].classList.toggle('hover5');
        } else if(`${hover[i].id}` === '6') {
            hover[i].classList.toggle('hover6');
        } else if(`${hover[i].id}` === '7') {
            hover[i].classList.toggle('hover7');
        } else {
            hover[i].classList.toggle('hover8');
        }
        
    })
    
}



