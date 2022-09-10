const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        
        this.School = school;
    }
    // employee role override to return intern
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
