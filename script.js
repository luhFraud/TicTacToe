const hover = document.querySelectorAll('.box');

// Game board module
const gameBoard = (() => {
    const board = ['','','','','','','','',''];
    return {board};
})();
console.log(gameBoard.board);
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

    const storeSymbol = () => {
        gameBoard.board.push(currentTurn.getSymbol());
    };

    


    return {getName, getSymbol, changeTurns, storeSymbol}
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');
let currentTurn = player1;



for (let i = 0; i < hover.length; i++ ) {

    hover[i].addEventListener('click', showSymbol, { once: true})

    function showSymbol() {
        hover[i].textContent = currentTurn.getSymbol();
        //currentTurn.storeSymbol();
        console.log(`${hover[i].id}`)
        currentTurn.changeTurns();
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
        console.log(hover[i]);
        
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



