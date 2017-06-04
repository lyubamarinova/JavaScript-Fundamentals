function cone(r,h) {
    "use strict";
     let a = Math.sqrt(h*h + r*r);
     let surfaceArea = Math.PI * r * (r+a);
     let volume = Math.PI *r * r * (h/3);
     console.log(volume.toFixed(4));
    console.log(surfaceArea.toFixed(4));

}
