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

let screen = document.querySelector("#screen");
let result = 0, add = 0;

fn1.onclick = function () {
    screen.textContent += "1";
}

fn2.onclick = function () {
    screen.textContent += "2";
}

fn3.onclick = function () {
    screen.textContent += "3";
}

fn4.onclick = function () {
    screen.textContent += "4";
}

fn5.onclick = function () {
    screen.textContent += "5";
}

fn6.onclick = function () {
    screen.textContent += "6";
}

fn7.onclick = function () {
    screen.textContent += "7";
}

fn8.onclick = function () {
    screen.textContent += "8";
}

fn9.onclick = function () {
    screen.textContent += "9";
}

fn0.onclick = function () {
    screen.textContent += "0";
}

fnPlus.onclick = function () {
    add = parseInt(screen.textContent);
    console.log(add);
    result += add;
    screen.textContent = "";
}

fnEqual.onclick = function () {
    add = parseInt(screen.textContent);
    result += add;
    console.log(result);
    screen.textContent = result;
}
