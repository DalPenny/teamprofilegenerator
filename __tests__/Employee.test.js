//pulling employee constructor from lib directory
const Employee = require("../lib/employee.js");

test('creation of the Employee object', () => {
    const employee = new Employee('Emp', 1, 'emp@sampleemail.com','Employee');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test("test employee name", () => {
    const employee = new Employee('Emp', 1, 'emp@sampleemail.com','Employee');

    expect(employee.getName()).toBe('Emp');
});

test("test employee id", () => {
    const employee = new Employee('Emp', 1, 'emp@sampleemail.com','Employee');

    expect(employee.getId()).toBe(1);
});

test("test employee email", () => {
    const employee = new Employee('Emp', 1, 'emp@sampleemail.com','Employee');

    expect(employee.getEmail()).toBe('emp@sampleemail.com');
});

test("test employee role", () => {
    const employee = new Employee('Emp', 1, 'emp@sampleemail.com','Employee');

    expect(employee.getRole()).toBe('Employee');
});