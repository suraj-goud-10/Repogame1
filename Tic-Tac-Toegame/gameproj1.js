let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let msg2=document.querySelector("#msg2");
let turnO=true;
let count=0;
const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    }); 
});
const showwinner=(winner)=>{
         msg.innerText=`Congratulations,winner is ${winner}`;
         msgContainer.classList.remove("hide");
         disabledBoxes();
};
const checkwinner=()=>{
     for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
           if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner");
            showwinner(pos1val);
           }
        }
        count=count+1;
     }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);