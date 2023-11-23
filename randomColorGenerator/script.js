let colorArr = ["red", "blue", "black", "grey", "yellow", "orange"];

let containerEle = document.createElement("div");
containerEle.classList.add("container");
document.body.appendChild(containerEle);

let textEle = document.createElement("h1");
textEle.textContent = "Click on the below button to change color";
textEle.style.textAlign = "center";
containerEle.appendChild(textEle);

let buttonContainerEle = document.createElement("div");
containerEle.appendChild(buttonContainerEle);

let buttonEle = document.createElement("button");
buttonEle.textContent = "Change";
buttonEle.classList.add("buttonEle");
buttonContainerEle.appendChild(buttonEle);

let colorContainerEle = document.createElement("div");
colorContainerEle.classList.add("colorContainer");
containerEle.appendChild(colorContainerEle);


buttonEle.addEventListener("click", ()=>{
    let randomNumber = Math.ceil(Math.random()*colorArr.length);
    colorContainerEle.style.backgroundColor = colorArr[randomNumber];
})