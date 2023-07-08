console.log("Welcome To TIC TAC TOE");
let turn = "X";
gameover = true;

// two function 
// to change the tuen

const changeturn = ()=>{
    return turn === "X"? "O": "X"

}

// to check the win

const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('box-text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;

        
        
    })

}



// main game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(gameover = false){
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn;
            }
            
        }
    })
})

// button

let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
})