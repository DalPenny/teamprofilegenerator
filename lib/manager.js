const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, role, officenumber) {
        super(name, id, email, role);
        
        this.officeNumber = officenumber;
    }
    // employee role override to return manager
    getRole(){
        return "Manager";
    }
    // returning Office number from input 
    getOfficeNumber () {
        return this.officeNumber;
    }
}

module.exports = Manager;

