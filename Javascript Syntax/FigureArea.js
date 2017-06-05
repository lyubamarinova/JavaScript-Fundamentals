function figureArea(w, h, W,H) {
    "use strict";
     let area1 = w*h;
     let area2= W*H;
     let area3= Math.min(w,W)*Math.min(h,H);
     let result = area1 +area2 -area3;
    console.log(result);

}

//figureArea(13, 2, 5, 8);
