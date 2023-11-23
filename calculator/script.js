let containerEle = document.createElement("div");
containerEle.classList.add("containerEle");
document.body.appendChild(containerEle);

let inputEleContainer = document.createElement("div");
containerEle.appendChild(inputEleContainer);

let inputEle = document.createElement("input");
inputEle.type = "text";
inputEle.classList.add("inputEle");
inputEleContainer.appendChild(inputEle);

let cardContainer4 = document.createElement("div");
cardContainer4.classList.add("card")
containerEle.appendChild(cardContainer4);

let button13 = document.createElement("button");
button13.classList.add("btn");
button13.textContent = "√'";
cardContainer4.appendChild(button13);

let button14 = document.createElement("button");
button14.classList.add("btn");
button14.textContent = "x²";
cardContainer4.appendChild(button14);

let button15 = document.createElement("button");
button15.classList.add("btn");
button15.textContent = "Mod";
cardContainer4.appendChild(button15);

let button16 = document.createElement("button");
button16.classList.add("btn");
button16.textContent = "AC";
cardContainer4.appendChild(button16);

let cardContainer1 = document.createElement("div");
cardContainer1.classList.add("card")
containerEle.appendChild(cardContainer1);

let button1 = document.createElement("button");
button1.classList.add("btn");
button1.textContent = "1";
cardContainer1.appendChild(button1);

let button2 = document.createElement("button");
button2.classList.add("btn");
button2.textContent = "2";
cardContainer1.appendChild(button2);

let button3 = document.createElement("button");
button3.classList.add("btn");
button3.textContent = "3";
cardContainer1.appendChild(button3);

let button4 = document.createElement("button");
button4.classList.add("btn");
button4.textContent = "/";
cardContainer1.appendChild(button4);

let cardContainer2 = document.createElement("div");
cardContainer2.classList.add("card")
containerEle.appendChild(cardContainer2);

let button5 = document.createElement("button");
button5.classList.add("btn");
button5.textContent = "4";
cardContainer2.appendChild(button5);

let button6 = document.createElement("button");
button6.classList.add("btn");
button6.textContent = "5";
cardContainer2.appendChild(button6);

let button7 = document.createElement("button");
button7.classList.add("btn");
button7.textContent = "6";
cardContainer2.appendChild(button7);

let button8 = document.createElement("button");
button8.classList.add("btn");
button8.textContent = "*";
cardContainer2.appendChild(button8);

let cardContainer3 = document.createElement("div");
cardContainer3.classList.add("card")
containerEle.appendChild(cardContainer3);

let button9 = document.createElement("button");
button9.classList.add("btn");
button9.textContent = "7";
cardContainer3.appendChild(button9);

let button10 = document.createElement("button");
button10.classList.add("btn");
button10.textContent = "8";
cardContainer3.appendChild(button10);

let button11 = document.createElement("button");
button11.classList.add("btn");
button11.textContent = "9";
cardContainer3.appendChild(button11);

let button12 = document.createElement("button");
button12.classList.add("btn");
button12.textContent = "-";
cardContainer3.appendChild(button12);

let cardContainer5 = document.createElement("div");
cardContainer5.classList.add("card")
containerEle.appendChild(cardContainer5);

let button17 = document.createElement("button");
button17.classList.add("btn");
button17.textContent = "0";
cardContainer5.appendChild(button17);

let button18 = document.createElement("button");
button18.classList.add("btn");
button18.textContent = ".";
cardContainer5.appendChild(button18);

let button19 = document.createElement("button");
button19.classList.add("btn");
button19.textContent = "=";
cardContainer5.appendChild(button19);

let button20 = document.createElement("button");
button20.classList.add("btn");
button20.textContent = "+";
cardContainer5.appendChild(button20);


let buttons = document.querySelectorAll("button");
let displayValue = "";

for (item of buttons){
    item.addEventListener("click", (e)=>{
        let buttonText = e.target.innerHTML;
        
        if (buttonText === "="){
            let result;
            try{
                result = eval(displayValue);
            }
            catch(error){
                result = "Expression error";
            }
            inputEle.value = result;
        }
        else if (buttonText === "AC"){
            displayValue = "";
            inputEle.value = displayValue;
        }
        else if (buttonText === "x²"){
            buttonText = "**";
            displayValue+=buttonText;
            inputEle.value = displayValue;
        }
        else if(buttonText === "Mod"){
            buttonText = "%";
            displayValue += buttonText;
            inputEle.value = displayValue; 
        }
        else if(buttonText === "√'"){
            buttonText = "**0.5";
            displayValue += buttonText;
            inputEle.value = displayValue;
        }
        else{
            displayValue += buttonText;
            inputEle.value = displayValue;
        }

    })

}