const buttons = document.getElementsByClassName("btn");
const display = document.getElementsByClassName("typebox")[0]; //The . is only used in CSS selectors and querySelector()/querySelectorAll(), not in getElementsByClassName().//
const backspace =document.getElementById("backspace");
const equal =document.getElementById("Equal");
const zero = document.getElementById("zero");
const cancel = document.getElementById("cancel");
const sound = new Audio("click sound.mp3");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        sound.play();
        let value = buttons[i].textContent;

        if (value === "=") {

            let exp = display.value;
            exp = exp.replaceAll("x", "*");
            exp = exp.replaceAll("÷", "/");

            display.value = eval(exp);

        }

        else if(buttons[i].id === "backspace"){
            display.value = display.value.slice(0,-1);
        }
        
        else if(value === "C"){
            display.value = "";
        }
        
        else {

            display.value += value;

        }

    });
}
