function minAge(minAge,name1,age1,name2,age2){
    "use strict";
    let personA={name:name1,age:age1};
    let personB={name:name2,age:age2};
    if ( age1 >= minAge) {
        console.log(personA);
    }
    if ( age2 >= minAge) {
        console.log(personB);
    }
}

//minAge(12, 'Ivan', 15, 'Asen', 9);