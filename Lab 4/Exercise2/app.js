const comparer = require("./numbers/comparer");
const { Add, Subtract } = require("./numbers/calculator");

function run(x, y) {
    if (comparer.AreNumberEqual(x, y)) {
        console.log(`adding the two numbers ${x},${y} \n${Add(x, y)}`);
    } else
        console.log(
            `subtracting the two numbers ${x},${y} \n${Subtract(x, y)}`
        );
}

run(5, 2);
run(10, 10);
