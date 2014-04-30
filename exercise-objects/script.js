var market = {
    averageSalary: 7600,
};

function Employee(salaryMultiplier) {
    // Implement this
}

Employee.prototype = {
    getSalary: function() {
        // Implement this
    }
};

function Developer(specialty) {
    // Implement this
}

Developer.prototype = new Employee(2.0);

function JavascriptDeveloper() {
    // Implement this
}

// Modify this
JavascriptDeveloper.prototype = new Object();

