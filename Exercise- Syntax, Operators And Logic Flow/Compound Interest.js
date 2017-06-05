function compoundInt(input) {
    "use strict";

    let interest = input[0] * (Math.pow(1 + (input[1] / 100) / (12 / input[2]), (12 / input[2]) * input[3]));
    console.log(interest.toFixed(2));
}

compoundInt([1500, 4.3, 3, 6]);