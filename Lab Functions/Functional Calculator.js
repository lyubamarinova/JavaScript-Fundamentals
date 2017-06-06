function calculator(array) {
    "use strict";
    let a = Number(array[0]);
    let b = Number(array[1]);
    let operator = String(array[2]);

    if (operator == "+") {
        console.log(a + b);
    }

    else if (operator == "-") {
        console.log(a - b);
    }
    else if (operator == "*") {
       console.log(a * b);
    }

    else if (operator == "/") {
        console.log(a / b);
    }
}