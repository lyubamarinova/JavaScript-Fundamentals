function SumAndVAT(input) {
   let sum = 0;
    for (let i=0; i<input.length; i++) {
        sum+=input[i];
    }
    let vat = 0.2*sum;
    let total = sum+vat;
    console.log("Sum =" +sum);
    console.log("VAT =" +vat);
    console.log("Total =" +total);
}

SumAndVAT([1.20, 2.60, 3.50]);