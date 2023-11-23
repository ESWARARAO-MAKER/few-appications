let containerEle = document.createElement("div");
containerEle.classList.add("container");
document.body.appendChild(containerEle);

let paraEle = document.createElement("p");
paraEle.textContent = 0;
paraEle.classList.add("para");
containerEle.appendChild(paraEle);

let buttonContainerEle = document.createElement("div");
buttonContainerEle.classList.add("buttonContainer");
containerEle.appendChild(buttonContainerEle);

let startBtn = document.createElement("button");
startBtn.textContent="Increase";
startBtn.classList.add("btn","startBtn");
buttonContainerEle.appendChild(startBtn);


let stopBtn = document.createElement("button");
stopBtn.textContent = "Decrease";
stopBtn.classList.add("btn"),"stopBtn";
buttonContainerEle.appendChild(stopBtn);

let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
resetBtn.classList.add("btn","resetBtn");
buttonContainerEle.appendChild(resetBtn);


let counter = 0;


startBtn.addEventListener("click", function(){
    counter+=1;
    paraEle.textContent = counter;
    if (counter > 0){
        paraEle.style.color = "green";
    }
    else if (counter < 0){
        paraEle.style.color = "red";
    }
    else{
        paraEle.style.color = "black";
    }
})

stopBtn.addEventListener("click", function(){
    counter-=1;
    paraEle.textContent = counter;
    if (counter > 0){
        paraEle.style.color = "green";
    }
    else if (counter < 0){
        paraEle.style.color = "red";
    }
    else{
        paraEle.style.color = "black";
    }
})

resetBtn.addEventListener("click", function(){
    counter = 0;
    paraEle.textContent =  counter;
    paraEle.style.color = "black";
})