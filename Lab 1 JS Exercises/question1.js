// capitalise the first letter of a string

x = "test if this works";

function capitalize(x) {
    let array = x.split(" ");
    let upperstring = "";
    for (i = 0; i < array.length; i++) {
        upperstring += array[i][0].toUpperCase() + array[i].substring(1) + " ";
    }

    return upperstring;
}

console.log(capitalize(x));
