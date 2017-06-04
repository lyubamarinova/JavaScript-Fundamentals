function triangleArea(a,b,c) {
    "use strict";
     let s = (a+b+c)/2;
     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
     console.log(area);
}