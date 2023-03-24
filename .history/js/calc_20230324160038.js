let fn1 = document.querySelector("#one");
let fn2 = document.querySelector("#two");
let fn3 = document.querySelector("#three");
let fn4 = document.querySelector("#four");
let fn5 = document.querySelector("#five");
let fn6 = document.querySelector("#six");
let fn7 = document.querySelector("#seven");
let fn8 = document.querySelector("#eight");
let fn9 = document.querySelector("#nine");
let fn0 = document.querySelector("#zero");
let fnPlus = document.querySelector("#plus");
let fnEqual = document.querySelector("#equal");
let fnAC = document.querySelector("#AC");
let fnCE = document.querySelector("#CE");

let screen = document.querySelector("#screen");
let result = 0, add = 0;
let isEqual = 0, isPlus = 0, isValid = 0;

fn1.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "1");
    isEqual = 0;
    isPlus = 0;
}

fn2.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "2");
    isEqual = 0;
    isPlus = 0;
}

fn3.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "3");
    isEqual = 0;
    isPlus = 0;
}

fn4.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "4");
    isEqual = 0;
    isPlus = 0;
}

fn5.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "5");
    isEqual = 0;
    isPlus = 0;
}

fn6.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "6");
    isEqual = 0;
    isPlus = 0;
}

fn7.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "7");
    isEqual = 0;
    isPlus = 0;
}

fn8.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "8");
    isEqual = 0;
    isPlus = 0;
}

fn9.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "9");
    isEqual = 0;
    isPlus = 0;
}

fn0.onclick = function () {
    if (isPlus)
        screen.textContent = "0";
    screen.textContent = parseInt(screen.textContent + "0");
    isEqual = 0;
    isPlus = 0;
}

fnPlus.onclick = function () {
    if (!isEqual && !isPlus) {
        add = parseInt(screen.textContent);
        // console.log(add);
        result += add;
    }
    isEqual = 0;
    isPlus = 1;
    isValid = 1;
}

fnEqual.onclick = function () {
    if (isValid) {
        if (!isEqual)
            add = parseInt(screen.textContent);
        result += add;
        // console.log(result);
        screen.textContent = result;
        isEqual = 1;
        isPlus = 0;
    }
}


fnAC.onclick = function () {
    screen.textContent = "0";
    result = 0;
    add = 0;
    isEqual = 0;
    isPlus = 0;
    isValid = 0;
}

fnCE.onclick = function () {
    if (!isEqual && !isPlus)
        screen.textContent = "0";
}

