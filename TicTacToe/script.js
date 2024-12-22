let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let result = document.querySelector("#Result");
let turn = document.querySelector('#turn');

let turn0 = true;  //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];


boxes.forEach(box => {
    box.addEventListener('click',()=>{
        // console.log("box was clicked");
        if(turn0){
            // turn.innerText = `X's Turn..`
            box.innerText = "O";
            turn0 = false;
        }
        else{
            // turn.innerText = `O's Turn..`
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        
    })
});


// Reset button / New Game button
const resetGame = () =>{
    turn0 =true;
    enableBoxes();
    result.innerText = "";
    
}




// disable boxex after winner is announced
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
    turn.disable = true;
}
// enable boxexs after reset or New game button is clicked 
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    
    }
    turn.disable = false;
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText
      
        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                result.innerText = `Congrats!!, Player ${pos1Val} is the Winner`;
                boxes.innerText = ""
                // alert(`Congrats!!, Player ${pos1Val} is the Winner`);
                resetBtn.innerText = "New Game";
                disableBoxes();
            }
        }
      
    }
    
}


resetBtn.addEventListener('click',()=>{
    resetGame();
})