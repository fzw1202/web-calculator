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
let fnAdd = document.querySelector("#add");
let fnEqual = document.querySelector("#equal");
let fnAC = document.querySelector("#AC");
let fnCE = document.querySelector("#CE");

let screen = document.querySelector("#screen");
let result = 0, add = 0;
let isEqual = 0, isAdd = 0, isValid = 0, isContinue = 0;

fn1.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
        console.log(result);
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "1");
    isEqual = 0;
    isAdd = 0;
}

fn2.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "2");
    isEqual = 0;
    isAdd = 0;
}

fn3.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "3");
    isEqual = 0;
    isAdd = 0;
}

fn4.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "4");
    isEqual = 0;
    isAdd = 0;
}

fn5.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "5");
    isEqual = 0;
    isAdd = 0;
}

fn6.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "6");
    isEqual = 0;
    isAdd = 0;
}

fn7.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "7");
    isEqual = 0;
    isAdd = 0;
}

fn8.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "8");
    isEqual = 0;
    isAdd = 0;
}

fn9.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "9");
    isEqual = 0;
    isAdd = 0;
}

fn0.onclick = function () {
    if (isEqual) {
        screen.textContent = "0";
        result = add;
        isContinue = 1;
    }
    if (isAdd)
        screen.textContent = "0";
    screen.textContent = BigInt(screen.textContent + "0");
    isEqual = 0;
    isAdd = 0;
}

fnAdd.onclick = function () {
    if (!isEqual && !isAdd) {
        add = BigInt(screen.textContent);
        // console.log(add);
        result += add;
    }
    isEqual = 0;
    isAdd = 1;
    isValid = 1;
}

fnEqual.onclick = function () {
    if (isValid) {
        if (!isEqual) {
            add = BigInt(screen.textContent);
            if (isContinue) {
                [add, result] = [result, add];
                isContinue = 0;
            }
        }
        result += add;
        // console.log(result);
        screen.textContent = result;
        isEqual = 1;
        isAdd = 0;
    }
}


fnAC.onclick = function () {
    screen.textContent = "0";
    result = 0;
    add = 0;
    isEqual = 0;
    isAdd = 0;
    isValid = 0;
}

fnCE.onclick = function () {
    if (!isEqual && !isAdd)
        screen.textContent = "0";
}

document.onkeydown = function(event){
    var code = event.keyCode;
    if (code == 8 || code == 46) {
        screen.textContent = screen.textContent.slice(0, -1);
        if (screen.textContent == "")
            screen.textContent = "0";
    }
    if (code >= 48 && code <= 57) {
        if (isEqual) {
            screen.textContent = "0";
            result = add;
            isContinue = 1;
        }
        if (isAdd)
            screen.textContent =  "0";
        screen.textContent = BigInt(screen.textContent + (code - 48));
        isEqual = 0;
        isAdd = 0;
    }
    if ((!event.shiftKey && code == 187) || code == 13)  // equal
        fnEqual.onclick();
    if (code == 107 || (event.shiftKey && code == 187))  // add
        fnAdd.onclick();
    if (code == 27)  // esc
        fnAC.onclick();
}
