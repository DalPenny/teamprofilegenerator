const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, id, email, role, username) {
        super(name, id, email, role);
        
        this.Username = username;
    }
    // employee role override to return engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;

