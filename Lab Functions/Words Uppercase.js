function wordsUppercase(word){
    "use strict";

    let splitRegex=/[, ?!:.;\-#$-+]+/g;
    let array = word.split(splitRegex);
    array=array.filter(x=> x!='');
    console.log(array.join(', ').toUpperCase());
}
