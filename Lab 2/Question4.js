//●	Using array.proto.filter create a function that will filter out all the values of the array that are less than twenty.

const values = [1, 60, 34, 30, 20, 5];
var filterNum = values => {
    var a = values.filter(num => num < 20);
    return a;
};
console.log(filterNum(values));
