function test() {
    assertExpected(
        generateGreeting('Hello', 'world', 'people', 'void'),
        'Hello, world, people and void'
    );    
    
    assertExpected(
        generateGreeting('Hello', 'world'),
        'Hello, world'
    );
    
    assertExpected(
        generateGreeting('Hello'),
        'Hello'
    );      
}

test();