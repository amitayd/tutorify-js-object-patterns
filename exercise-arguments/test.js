function test() {
    function assertGreeting(actual, expected) {
        console.log('===Test Passed:', actual === expected, '===');
        console.log('Expected:', expected);
        console.log('Actual:', actual);        
    }
    assertGreeting(
        generateGreeting('Hello', 'world', 'people', 'void'),
        'Hello, world, people and void'
    );    
    
    assertGreeting(
        generateGreeting('Hello', 'world'),
        'Hello, world'
    );     
}

test();