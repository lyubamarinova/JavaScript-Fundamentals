function distancePoints(x1,y1,x2,y2) {
    "use strict";

    let pointA = {x: x1, y: y1};
    let pointB = {x: x2, y: y2};

    let distanceX = Math.pow(pointA.x - pointB.x, 2);
    let distanceY = Math.pow(pointA.y - pointB.y, 2);
    let result = Math.sqrt(distanceX + distanceY);
    console.log(result);
}

//distancePoints(2.34, 15.66, -13.55, -2.9985);
