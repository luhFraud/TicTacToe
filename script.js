const hover = document.querySelectorAll('.box');
const results = document.querySelector('.results');

let winner;
let loser;


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
            previousTurn = player1
        } else {
            currentTurn = player1
            previousTurn = player2
        }
    }
    
    const checkWinner = () => {
        let winnerDeclared;

        for(i = 0 ; i < winningConditions.length ; i++) {
            
            if(gameBoard.board[winningConditions[i][0]] === currentTurn.getSymbol() && 
               gameBoard.board[winningConditions[i][1]] === currentTurn.getSymbol() &&
               gameBoard.board[winningConditions[i][2]] === currentTurn.getSymbol()) {
                
                winnerDeclared = true;
                let winner = currentTurn.getName();
                let loser = previousTurn.getName();
                const winnerH2 = document.createElement('h2');
                winnerH2.textContent = ('Winner is ' + winner + ' !');
                results.appendChild(winnerH2);

                const loserP = document.createElement('p');
                loserP.textContent = ('Loser is ' + loser + " :'(");
                results.appendChild(loserP);
                console.log('winner' , currentTurn.getSymbol())
                document.getElementById('winning-container').style.display = '';
                
            } 
        }

        if(winnerDeclared !== true){
            checkDraw();
        }

    }

    const checkDraw = () => {
        if ((gameBoard.board[0] == 'X' || gameBoard.board[0] == 'O') && (gameBoard.board[1] == 'X' || gameBoard.board[1] == 'O') && 
            (gameBoard.board[2] == 'X' || gameBoard.board[2] == 'O') && (gameBoard.board[3] == 'X' || gameBoard.board[3] == 'O') && 
            (gameBoard.board[4] == 'X' || gameBoard.board[4] == 'O') && (gameBoard.board[5] == 'X' || gameBoard.board[5] == 'O') && 
            (gameBoard.board[6] == 'X' || gameBoard.board[6] == 'O') && (gameBoard.board[7] == 'X' || gameBoard.board[7] == 'O') && 
            (gameBoard.board[8] == 'X' || gameBoard.board[8] == 'O')) {
 
                const drawH1 = document.createElement('h1');
                drawH1.textContent = "It's a Draw!"
                results.appendChild(drawH1);
                document.getElementById('winning-container').style.display = '';
 
         }
    }
    

    return {getName, getSymbol, changeTurns, checkWinner, checkDraw}
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');
let currentTurn = player1;
let previousTurn = player2;





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



