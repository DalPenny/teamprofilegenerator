const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, role, officenumber) {
        super(name, id, email, role);
        
        this.Officenumber = officenumber;
    }
    // employee role override to return manager
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;

