let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true;

const win= [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

Array.from(boxes).forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was Clicked");
        if (turnO){
            box.innerText="O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
    })
})
