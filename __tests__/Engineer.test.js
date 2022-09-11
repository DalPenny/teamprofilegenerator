//pulling engineer constructor from lib directory
const Engineer = require("../lib/engineer.js");

//create the engineer object
test('creation of the Engineer object', () => {
    const engineer = new Engineer('Tom', 1, 'tom@sampleemail.com','Engineer', 'Tomgithub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.GitUsername).toEqual(expect.any(String));
});

// Test Engineer Name
test("validate engineer name", () => {
    const engineer = new Engineer('Tom', 1, 'tom@sampleemail.com', 'Engineer', 'Tomgithub');

    expect(engineer.getName()).toBe("Tom");
});

// Test Engineer Role
test("validate manager role", () => {
    const engineer = new Engineer('Tom', 1, 'tom@sampleemail.com', 'Engineer', 'Tomgithub');

    expect(engineer.getRole()).toBe("Engineer");
});

// Test Engineer Github UserName
test("validate engineer name", () => {
    const engineer = new Engineer('Tom', 1, 'tom@sampleemail.com', 'Engineer', 'Tomgithub');

    expect(engineer.getGitUsername()).toBe("Tomgithub");
});
