function dist(input) {
    "use strict";
    let deltaX = input[3] - input[0];
    let deltaY = input[4] - input[1];
    let deltaZ = input[5] - input[2];
    let distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY + deltaZ*deltaZ);
    console.log(distance);
}

dist([1, 1, 0, 5, 4, 0]);