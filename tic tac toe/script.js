let turn = "X"
var gameover = false;

// function to change turn
function changeTurn(){
    if(turn==="X")
    turn = "O"
    else turn = "X"
}

//function to check if any player won.
function checkWin(){
    let textbox = document.getElementsByClassName("textbox")
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach((e)=>{
        if((textbox[e[0]].innerText===textbox[e[1]].innerText) && (textbox[e[0]].innerText===textbox[e[2]].innerText) && textbox[e[0]].innerText!==""){
            document.querySelector(".result").innerText = "Player " + textbox[e[0]].innerText + " wins!"
            gameover = true;
        }
    })
    
}

//function to check if its a tie
function checkTie(){
    var cnt = 0;
    let textbox = document.getElementsByClassName("textbox")
    Array.from(textbox).forEach(element=>{
        if(element.innerText !== ""){
            cnt += 1
        }
    })

    if(cnt==9){
        document.querySelector(".result").innerText = "tie!"
        gameover = true;
    }
}


// this is the main game logic
let boxes = document.getElementsByClassName("columns")
Array.from(boxes).forEach(element=>{
    let textbox = element.querySelector(".textbox")
    element.addEventListener('click', ()=>{
        if(textbox.innerText===""){
            textbox.innerText = turn
            changeTurn()
            checkWin()
            if(gameover){
                document.querySelector(".container").style.opacity = "0.3";
                document.querySelector("#check").style.display = "flex";
            }
            else{
                checkTie()
                if(gameover){
                    document.querySelector(".container").style.opacity = "0.3";
                    document.querySelector("#check").style.display = "flex";
                }        
            }
        }
                  
    })
})

document.getElementById("btn").addEventListener("click", ()=>{
    document.querySelector("#check").style.display = "none";
    document.querySelector(".container").style.opacity = "1";
    gameover = false;
    turn = "X"
    let reset = document.querySelectorAll(".textbox")
    reset.forEach(element=>{
        element.innerText = ""
    })
})
