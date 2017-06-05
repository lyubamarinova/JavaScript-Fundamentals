function rounder([number,precision]) {
    let num = Number(number);
    if (precision > 15){
        let precision = 15;
        console.log(Number(num.toFixed(precision)));
    }
    else
        console.log(Number(num.toFixed(precision)));
}