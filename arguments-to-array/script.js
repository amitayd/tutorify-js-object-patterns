function asArray() {
    console.log("arguments.pop defined:",
        arguments.pop !== undefined);
        
    var argsArray = 
        Array.prototype.slice.call(arguments);
    console.log("argsArray.pop defined:",
        argsArray.pop !== undefined);        
}

asArray(1,2,3);