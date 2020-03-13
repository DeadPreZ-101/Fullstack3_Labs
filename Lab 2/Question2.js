//●	Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals and for..of

//function gretter(myArray, counter) {
//    var greetText = "Hello ";
//
//    for (var index = 0; index < myArray.length; index++) {
//        console.log(greetText + myArray[index]);
//    }
//}
//
//gretter(["Randy Savage", "Ric Flair", "Hulk Hogun"], 3);

let gretter = myArray => {
    const greetText = "Hello";

    for (let index in myArray) {
        console.log(`${greetText}, ${myArray[index]}`);
    }
};
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"]);
