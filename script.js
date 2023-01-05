const hover = document.querySelectorAll('.box');

for (let i = 0; i < hover.length; i++ ) {


    hover[i].addEventListener('mouseover', function () {
        hover[i].classList.toggle('hover');
        console.log(hover[i]);
        
    })
    hover[i].addEventListener('mouseleave', function() {
        hover[i].classList.toggle('hover');
    })
    
}

const GAME_BOARD = () => {
    let board = ['','','','','','','','',''];


}

