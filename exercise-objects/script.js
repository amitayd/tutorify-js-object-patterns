var market = {
    averageSalary: 7600,
};

function Employee(salaryMultiplier) {
    this.salaryMultiplier = salaryMultiplier;
}

Employee.prototype = {
    getSalary: function() {
        return market.averageSalary * this.salaryMultiplier;
    }
};

function Developer(specialty) {
    this.specialty = specialty;
}

Developer.prototype = new Employee(2.0);

function JavascriptDeveloper() {
    this.salarymultiplier = 3.0;
}

JavascriptDeveloper.prototype = new Developer('javascript');


var john = new JavascriptDeveloper();

console.log(john.getSalary(), john.specialty);


