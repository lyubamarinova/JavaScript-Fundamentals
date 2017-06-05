function lastMonth(input) {
    "use strict";
    let [day, month, year] = input;
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}
