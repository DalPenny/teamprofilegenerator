//pulling manager constructor from lib directory
const Manager = require("../lib/manager.js");

//create the manager object
test('creation of the Manager object', () => {
    const manager = new Manager('Max', 1, 'max@sampleemail.com','Manager', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test Manager Name
test("validate manager name", () => {
    const manager = new Manager('Max', 1, 'max@sampleemail.com', 'Manager', 2);

    expect(manager.getName()).toBe("Max");
});

// Test Manager Role
test("validate manager role", () => {
    const manager = new Manager('Max', 1, 'max@sampleemail.com', 'Manager', 2);

    expect(manager.getRole()).toBe("Manager");
});

// Test Manager Officenumber
test("validate manager Officenumber", () => {
    const manager = new Manager('Max', 1, 'max@sampleemail.com', 'Manager', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
