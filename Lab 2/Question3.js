//●	Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..

const colors = ['red', 'green', 'blue'];
var capitalizedColors = (colors) => {
    var a = colors.map(word => word[0].toUpperCase() + word.substring(1));
    return a;
}

console.log(capitalizedColors(colors));

