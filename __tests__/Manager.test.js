//pulling manager constructor from lib directory
const Manager = require("../lib/manager.js");

//create the manager object
test('creation of the Manager object', () => {
    const manager = new Manager('Max', 1, 'max@sampleemail.com','Manager', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.Officenumber).toEqual(expect.any(Number));
});

test("validate manager name", () => {
    const manager = new Manager('Max', 1, 'max@sampleemail.com', 'Manager', 2);

    expect(manager.getName()).toBe("Max");
});

