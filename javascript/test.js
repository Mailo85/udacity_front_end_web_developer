var donutBox = [
    ['glazed', 'chocolate glazed', 'cinnamon'],
    ['powdered', 'sprinkled', 'glazed cruller'],
    ['chocolate cruller', 'Boston creme', 'creme de leche'],
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
    for (var column = 0; column < donutBox[row].length; column++) {
        console.log(donutBox[row][column].toUpperCase());
    }
}

console.log(typeof donutBox);
