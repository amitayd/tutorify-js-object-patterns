function test() {
    var actualGreeting = generateGreeting('Hello', 'world', 'people', 'void');
    var expectedGreeting = 'Hello, world, people and void';
    
    console.log('Test Passed:', actualGreeting === expectedGreeting);
    console.log('Expected:', expectedGreeting);
    console.log('Actual:', actualGreeting);
}

test();