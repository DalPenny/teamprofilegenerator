//pulling employee constructor from lib directory
const Employee = require("../lib/employee.js");

test('creation of the Employee object', () => {
    const employee = new Employee('Max', 1, 'max@sampleemail.com','Employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.officenumber).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test("test employee name", () => {
    const employee = new Employee('Max', 1, 'max@sampleemail.com','Employee');

    expect(employee.getName()).toBe('Max');
});

test("test employee id", () => {
    const employee = new Employee('Max', 1, 'max@sampleemail.com','Employee');

    expect(employee.getId()).toBe(1);
});

test("test employee email", () => {
    const employee = new Employee('Max', 1, 'max@sampleemail.com','Employee');

    expect(employee.getEmail()).toBe('max@sampleemail.com');
});

test("test employee role", () => {
    const employee = new Employee('Max', 1, 'max@sampleemail.com','Employee');

    expect(employee.getRole()).toBe('Employee');
});