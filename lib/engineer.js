const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, id, email, role, gitusername) {
        super(name, id, email, role);
        
        this.GitUsername = gitusername;
    }

    // returning Github Username from input 
    getGitUsername () {
        return this.GitUsername;
    }

    // employee role override to return engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;

