let containerEle =  document.createElement("div");
containerEle.classList.add("container");
document.body.appendChild(containerEle);

let paraEle  = document.createElement("p");
paraEle.textContent = 0;
paraEle.classList.add("para");
containerEle.appendChild(paraEle);

let buttonContainerEle = document.createElement("div");
buttonContainerEle.classList.add("buttonContainer");
containerEle.appendChild(buttonContainerEle);

let startBtnEle =  document.createElement("button");
startBtnEle.textContent = "Start";
startBtnEle.classList.add("btn", "startBtn");
buttonContainerEle.appendChild(startBtnEle);

let stopBtnEle = document.createElement("button");
stopBtnEle.textContent = "Stop";
stopBtnEle.classList.add("btn","stopBtn");
buttonContainerEle.appendChild(stopBtnEle);

let resetBtnEle = document.createElement("button");
resetBtnEle.textContent = "Reset";
resetBtnEle.classList.add("resetBtn","btn");
buttonContainerEle.appendChild(resetBtnEle);

let counter = paraEle.textContent;
let intervalId;

startBtnEle.addEventListener("click", function(){
    intervalId = setInterval(function(){
        counter = parseInt(counter)+1;
        paraEle.textContent = counter;
    },1000);
})

stopBtnEle.addEventListener("click", function(){
    clearInterval(intervalId);
})

resetBtnEle.addEventListener("click", function(){
    clearInterval(intervalId);
    counter = 0;
    paraEle.textContent = counter;
})
