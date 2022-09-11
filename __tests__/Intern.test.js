//pulling intern constructor from lib directory
const Intern = require("../lib/intern.js");

//create the intern object
test('creation of the Intern object', () => {
    const intern = new Intern('Sam', 1, 'sam@sampleemail.com','Intern', 'ABC school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.School).toEqual(expect.any(String));
});

// Test Intern's Name
test("validate intern name", () => {
    const intern = new Intern('Sam', 1, 'sam@sampleemail.com', 'Intern', 'ABC school');

    expect(intern.getName()).toBe("Sam");
});

// Test Intern's School
test("validate intern school name", () => {
    const intern = new Intern('Sam', 1, 'sam@sampleemail.com', 'Intern', 'ABC school');

    expect(intern.getSchool()).toBe("ABC school");
});

