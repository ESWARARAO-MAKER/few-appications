let containerEle = document.createElement("div");
containerEle.classList.add("containerEle");
document.body.appendChild(containerEle);

let bulbImgContainerEle = document.createElement("div");
containerEle.appendChild(bulbImgContainerEle);

let bulbImgEle = document.createElement("img");
bulbImgEle.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
bulbImgEle.classList.add("bulbImg");
bulbImgContainerEle.appendChild(bulbImgEle);

let catImgContainerEle = document.createElement("div");
containerEle.appendChild(catImgContainerEle);

let catImgEle = document.createElement("img");
catImgEle.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
catImgEle.classList.add("catImg");
catImgContainerEle.appendChild(catImgEle);

let switchContainerEle = document.createElement("div");
switchContainerEle.classList.add("switchContainer");
containerEle.appendChild(switchContainerEle);

let switchTextEle = document.createElement("h1");
switchTextEle.textContent = "Switch On";
switchTextEle.classList.add("switchStatus");
switchContainerEle.appendChild(switchTextEle);

let buttonsContainerEle = document.createElement("div");
buttonsContainerEle.classList.add("buttonContainer");
switchContainerEle.appendChild(buttonsContainerEle);

let onButtonEle = document.createElement("button");
onButtonEle.classList.add("btn","onBtn");
onButtonEle.textContent = "On";
buttonsContainerEle.appendChild(onButtonEle);

let offBtnEle = document.createElement("button");
offBtnEle.classList.add("btn","offBtn");
offBtnEle.textContent = "Off";
buttonsContainerEle.appendChild(offBtnEle);


onButtonEle.addEventListener("click", ()=>{
    bulbImgEle.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImgEle.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchTextEle.textContent = "Switch On"
    offBtnEle.style.backgroundColor = "#e12d39";
    onButtonEle.style.backgroundColor =  "#cbd2d9";
})

offBtnEle.addEventListener("click", ()=>{
    bulbImgEle.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImgEle.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchTextEle.textContent = "Switch Off";
    onButtonEle.style.backgroundColor = "green";
    offBtnEle.style.backgroundColor = "#cbd2d9";
})







