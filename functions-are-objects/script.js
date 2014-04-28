function sayHey(name) {
    console.log('Hey,', name);
}


sayHey('you');

sayHey.version = 'asFunctionDeclaration';
console.log(sayHey.version);