/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var currentUser = 'X';
var boardArray = new Array(9);
document.addEventListener('click', function (e) {
    var clicked_target = e.target.id;
    var printmove = document.getElementById(clicked_target);
    var clickedIndex = parseInt(clicked_target);
    if (currentUser === 'X' && typeof boardArray[clickedIndex] === 'undefined') {
        printmove.innerHTML = 'X';
        currentUser = 'O';
        boardArray[clickedIndex] = 'X';
        if (checkWin()) {
            hide(document.querySelectorAll('.square'));
            showWin('X');
        } else {
            if (checkGameOver()) {
                hide(document.querySelectorAll('.square'));
                showGameOver();
            }
        }
    } else if (currentUser === 'O' && typeof boardArray[clickedIndex] === 'undefined') {
        printmove.innerHTML = 'O';
        currentUser = 'X';
        boardArray[clickedIndex] = 'O';
        if (checkWin()) {
            hide(document.querySelectorAll('.square'));
            showWin('O');

        } else {
            if (checkGameOver()) {
                hide(document.querySelectorAll('.square'));
                showGameOver();
            }
        }
    }
});
function checkGameOver() {
    var isGameOver = true;
    for (var arr_i = 0; arr_i < boardArray.length; arr_i++) {
        if (typeof boardArray[arr_i] === 'undefined') {
            isGameOver = false;

        }
    }

    if (isGameOver === true) {
        return true;
    } else {
        return false;
    }
}
function checkWin() {
    var ba = boardArray;
    if (ba[0] === ba[4] && ba[4] === ba[8] && typeof ba[0] !== 'undefined' ||
            ba[2] === ba[4] && ba[4] === ba[6] && typeof ba[2] !== 'undefined' ||
            ba[0] === ba[1] && ba[1] === ba[2] && typeof ba[0] !== 'undefined' ||
            ba[3] === ba[4] && ba[4] === ba[5] && typeof ba[3] !== 'undefined' ||
            ba[6] === ba[7] && ba[7] === ba[8] && typeof ba[6] !== 'undefined' ||
            ba[0] === ba[3] && ba[3] === ba[6] && typeof ba[0] !== 'undefined' ||
            ba[1] === ba[4] && ba[4] === ba[7] && typeof ba[1] !== 'undefined' ||
            ba[2] === ba[5] && ba[5] === ba[8] && typeof ba[2] !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

function hide(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
        elements[index].style.opacity = '0.5';

    }
}
function showWin(winner) {
    var div = document.getElementById('winNotify');
    div.innerHTML = winner + ' is winner';
    div.style.zIndex = "10";
    document.getElementById('gameBoard').style.pointerEvents = 'none';
}
function showGameOver() {
    var div = document.getElementById('winNotify');
    div.innerHTML = 'Game draw';
    div.style.zIndex = "10";
    div.style.color = "red";
    document.getElementById('gameBoard').style.pointerEvents = 'none';
}