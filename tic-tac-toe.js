/*Entire code was done before pushing and committing to git so please forgive me if I include a part 
0f code that shouldve been added later on in the lab */

var square;
var click = 0;
var winner;
var button;

window.onload = function(){
    square = document.getElementById("board").children;
    winner = document.getElementById("status");
    button = document.getElementsByClassName("btn")[0];
    for (i=0; i<square.length; i++){
        square[i].className = "square";
        square[i].addEventListener("click", marker);
        square[i].addEventListener("mouseover", mouseHover);
        square[i].addEventListener("mouseout", mouseLeaves);
    }
    button.addEventListener("click", reset);
}
/* Click is used to determine whether a "X" or "O" is going to be added */
function marker(e){
    if ((e.target.innerHTML != "X")&&(e.target.innerHTML != "O")){
        if (click == 0){
            e.target.innerHTML = "X";
            e.target.className += (" X ");
            click = 1;
        }
        else{
            e.target.innerHTML = "O";
            e.target.className += (" O ");
            click = 0;
        }
    }
    checkWinner();
}
/* mouseHover is used to add styles to the square, and mouseLeaves is used to remove that style */
function mouseHover (e){
    e.target.className += (" hover ");
}

function mouseLeaves(e){
    e.target.classList.remove("hover");
}
/* wrote out all the possibilites for a winner and added that to the if statement so it can determine
who won if there was a winner */
function checkWinner(){
    if ((square[0].innerHTML == "X" && square[1].innerHTML == "X" && square[2].innerHTML == "X")||(square[3].innerHTML == "X" && square[4].innerHTML == "X" && square[5].innerHTML == "X")||(square[6].innerHTML == "X" && square[7].innerHTML == "X" && square[8].innerHTML == "X")||(square[0].innerHTML == "X" && square[3].innerHTML == "X" && square[6].innerHTML == "X")||(square[1].innerHTML == "X" && square[4].innerHTML == "X" && square[7].innerHTML == "X")||(square[2].innerHTML == "X" && square[5].innerHTML == "X" && square[8].innerHTML == "X")||(square[2].innerHTML == "X" && square[4].innerHTML == "X" && square[6].innerHTML == "X")||(square[0].innerHTML == "X" && square[4].innerHTML == "X" && square[8].innerHTML == "X")){
        winner.className += (" you-won ");
        winner.innerHTML = "Congratulations! X is the winner!";
    }
    else if ((square[0].innerHTML == "O" && square[1].innerHTML == "O" && square[2].innerHTML == "O")||(square[3].innerHTML == "O" && square[4].innerHTML == "O" && square[5].innerHTML == "O")||(square[6].innerHTML == "O" && square[7].innerHTML == "O" && square[8].innerHTML == "O")||(square[0].innerHTML == "O" && square[3].innerHTML == "O" && square[6].innerHTML == "O")||(square[1].innerHTML == "O" && square[4].innerHTML == "O" && square[7].innerHTML == "O")||(square[2].innerHTML == "O" && square[5].innerHTML == "O" && square[8].innerHTML == "O")||(square[2].innerHTML == "O" && square[4].innerHTML == "O" && square[6].innerHTML == "O")||(square[0].innerHTML == "O" && square[4].innerHTML == "O" && square[8].innerHTML == "O")){
        winner.className += (" you-won ");
        winner.innerHTML = "Congratulations! O is the Winner!";
    }
}
/*This function removes certain styles when the "new game" button is pressed so that users can play
another game */
function reset(){
    for(var i = 0; i<square.length; i++){
        square[i].innerHTML = "";
        square[i].classList.remove("X");
        square[i].classList.remove("O");
    }
    winner.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    winner.classList.remove("you-won");
}