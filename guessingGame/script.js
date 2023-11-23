let containerEle = document.createElement("div");
containerEle.classList.add("containerEle");
document.body.appendChild(containerEle);

let guessNumContainerEle = document.createElement("div");
guessNumContainerEle.classList.add("guessNumContainer");
containerEle.appendChild(guessNumContainerEle);

let guessImgContainerEle = document.createElement("div");
guessNumContainerEle.appendChild(guessImgContainerEle);

let guessImgEle = document.createElement("img");
guessImgEle.classList.add("guessImgEle");
guessImgEle.src="https://2.bp.blogspot.com/-dBXpUxCb2PA/VckEkbknrbI/AAAAAAAADgM/uH6hRH3y7Yg/s1600/wpa261c46a_06.png";
guessImgContainerEle.appendChild(guessImgEle);

let guessNumTextContainer = document.createElement("div");
guessNumContainerEle.appendChild(guessNumTextContainer);

let textEle = document.createElement("h1");
textEle.textContent = "Guess the Number between 1 to 100";
textEle.classList.add("textEle");
guessNumTextContainer.appendChild(textEle);


let guessNumDesContainer = document.createElement("div");
guessNumDesContainer.classList.add("guessNumDesc");
containerEle.appendChild(guessNumDesContainer);

let guessTextEle = document.createElement("h1");
guessTextEle.textContent = "Guess The Number";
guessNumDesContainer.appendChild(guessTextEle);

let inputEle = document.createElement("input");
inputEle.type = "text";
inputEle.classList.add("inputEle");
guessNumDesContainer.appendChild(inputEle);

let checkBtnEle = document.createElement("button");
checkBtnEle.classList.add("checkBtn");
checkBtnEle.textContent = "Check";
guessNumDesContainer.appendChild(checkBtnEle);

let resultContainerEle = document.createElement("div");
resultContainerEle.classList.add("resultContainer");
resultContainerEle.textContent="";
containerEle.appendChild(resultContainerEle);


let computerRandomNumber = Math.ceil(Math.random()*100);
checkBtnEle.addEventListener("click", ()=>{
    let userVal = inputEle.value;
    if (computerRandomNumber > parseInt(userVal)){
        resultContainerEle.textContent = "Too Low! Try Again";
        resultContainerEle.style.backgroundColor = "#1e217c";
    }
    else if (computerRandomNumber < parseInt(userVal)){
        resultContainerEle.textContent = "Too High! Try Again.";
        resultContainerEle.style.backgroundColor = "red";
    }
    else if (computerRandomNumber === parseInt(userVal)){
        resultContainerEle.textContent = "Congratulations, You Won the Game...!";
        resultContainerEle.style.backgroundColor = "green";
    }
    else{
        resultContainerEle.textContent = "Please Provide a Valid Value";
        resultContainerEle.style.backgroundColor = "#1e217c";
    }
})