function triangleStars(n){
    "use strict";
     let triangle = "";
    for(let i=0;i<n;i++) {
            triangle += "*";
            console.log(triangle);
        }
    let stars ="";
    for (let j = n-1;j>0;j--){
        let stars = "*".repeat(j);
        console.log(stars);
    }

}
