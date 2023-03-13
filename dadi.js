// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const buttonPlay = document.querySelector('.play');
console.log(buttonPlay);
let finalResult = document.querySelector('.result');

buttonPlay.addEventListener('click',
    function () {
        const player1 = Math.floor(Math.random() * 6) + 1;
        console.log(player1);
        const playerPc = Math.floor(Math.random() * 6) + 1;
        console.log(playerPc);

        if (player1 > playerPc) {
            console.log("win");  
            finalResult.innerHTML = "You Win!"; 
        } else if (player1 === playerPc) {
            console.log("draw");
            finalResult.innerHTML = "You Draw!";
        } else {
            console.log("lose");
            finalResult.innerHTML = "You Lose!";
        }
    }

)

Math.floor(Math.random);


