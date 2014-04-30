function test() {
    var david = new JavascriptDeveloper();
    assertExpected(
        market.averageSalary * 3.0,
        david.getSalary(),
        'david\'s salary'
    );
    
    assertExpected(
        'javascript',
        david.specialty,
        'david\'s specialty'
    );
    
    var dev = new Developer('nothing special')
    
    assertExpected(
        market.averageSalary * 2.0,
        dev.getSalary(),
        'dev\'s salary'
    );
    
    assertExpected(
        'nothing special',
        dev.specialty,
        'dev\'s specialty'
    );    
    
}

test();