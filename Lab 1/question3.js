// move the last 3 characters to the beginning of a string

x = "javascrIPT";

function replaceLast3(x, num) {
    newString = x.slice(-num) + x.slice(0, x.length - num);

    return newString;
}

console.log(replaceLast3(x, 3));
