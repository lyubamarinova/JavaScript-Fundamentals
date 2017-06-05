function distTime(input) {
    "use strict";
     let time = input[2]/3600;
     let speed1 = input[0];
     let speed2 = input[1];
     let dist1 = speed1*time;
     let dist2 = speed2*time;
     let result = Math.abs((dist1-dist2)*1000);
    console.log(result);
}

distTime([5, -5, 40]);
