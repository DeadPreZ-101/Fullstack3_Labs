exports.AreNumberEqual = function(x, y) {
    if (x == y) {
        console.log(`comparing two numbers: ${x},${y}`);
        console.log("numbers are equal!");
        return true;
    } else {
        console.log(`comparing two numbers: ${x},${y}`);
        console.log("numbers are not equal!");
        return false;
    }
};
