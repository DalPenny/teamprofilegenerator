//pulling engineer constructor from lib directory
const Engineer = require("../lib/engineer.js");

//create the engineer object
test('creation of the Engineer object', () => {
    const engineer = new Engineer('Max', 1, 'max@sampleemail.com','Engineer', 'Maxgithub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.username).toEqual(expect.any(String));
});

test("validate engineer name", () => {
    const engineer = new Manager('Max', 1, 'max@sampleemail.com', 'Engineer', 'Maxgithub');

    expect(engineer.getUsername()).toBe("Max");
});

