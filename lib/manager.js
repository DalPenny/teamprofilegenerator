const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, role, Officenumber) {
        super(name, id, email, role);
        
        this.Officenumber = Officenumber;
    }
    // employee role override to return manager
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;

