function aggregateElements(array){
    "use strict";
     let sum = 0;
     for (let i=0; i< array.length;i++){
         sum +=array[i];

     }
    console.log(sum);

    let reversedSum = 0;
    for (let i=0; i< array.length;i++){
        reversedSum +=1/array[i];

    }
     console.log(reversedSum);

    let stringSum="";
    for (let i=0; i< array.length;i++){
        array[i] = String(array[i]);
        stringSum+=array[i];

    }
    console.log(stringSum);

}
