// a function that will get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

const func = arg => {
    if (arg > 13) {
        let temp = arg - 13;
        return temp * 2;
    } else {
        return 13 - arg;
    }
};

func(32);
func(11);
