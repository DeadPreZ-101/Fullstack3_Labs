// find largest integer of three different numbers

function max(num1, num2, num3) {
    numbersArray = [num1, num2, num3];
    var maxNum = num1;
    for (i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > maxNum) {
            maxNum = numbersArray[i];
        }
    }
    return maxNum;
}

console.log(max(67, 9999, 8989));
