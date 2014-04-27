function argumentsSum() {
    var x = 0,
        i = 0;

    for (; i < arguments.length; i++) {
        x = x + arguments[i];
    }

    return x;
}

console.log(argumentsSum(1,2,3));
//argumentsSum(1, 2, 3);
//argumentsSum(2, 3);