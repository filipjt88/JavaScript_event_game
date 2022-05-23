let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

let p1Counter = 0;
let p2Counter = 0;


player1.addEventListener("click",playerOne);
window.addEventListener("keyup",playerTwo);



function playerOne() {
    player1.innerHTML = p1Counter++;
    checkWinner();
}

function playerTwo() {
    player2.innerHTML = p2Counter++;
    checkWinner();
}


function checkWinner() {
    if(p1Counter >= 21 || p2Counter >= 21) {
        stopGame();
        displayWinner();
    }
}


function stopGame() {
    player1.removeEventListener("click",playerOne);
    window.removeEventListener("keyup",playerTwo);
}


function displayWinner() {
    if(p1Counter > p2Counter) {
        player1.style.background = "green";
        player1.innerHTML = `<span>Winner <i class="fa-solid fa-trophy"></i></span>`;
        player1.style.border = '5px solid red';
    } else if(p1Counter < p2Counter) {
        player2.style.background = 'green';
        player2.innerHTML = `<span>Winner <i class="fa-solid fa-trophy"></i></span>`;
        player2.style.border = '5px solid red';
    }
}