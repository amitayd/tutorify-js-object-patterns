function argumentsPowSum(exponent) {
    var sum = 0,
        i = 1;

    for (; i < arguments.length; i++) {
        var power = Math.pow(arguments[i], exponent);
        sum = sum + power;
    }

    return sum;
}

console.log(argumentsPowSum(2, 8, 5));
console.log(argumentsPowSum(3, 8, 5));
//argumentsSum(1, 2, 3);
//argumentsSum(2, 3);