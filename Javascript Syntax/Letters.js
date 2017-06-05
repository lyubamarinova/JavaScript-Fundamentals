function occurString(word,letter){
    "use strict";
    let counter = 0;
    for (let i=0;i<word.length;i++) {
      if ( word[i] == letter){
          counter++;
      }
    }
    console.log(counter);
}

//occurString('hello', 'l');