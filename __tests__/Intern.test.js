//pulling intern constructor from lib directory
const Intern = require("../lib/intern.js");

//create the intern object
test('creation of the Intern object', () => {
    const intern = new Intern('Max', 1, 'max@sampleemail.com','Intern', 'school');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("validate intern name", () => {
    const intern = new Intern('Max', 1, 'max@sampleemail.com', 'Intern', 'school');

    expect(intern.getName()).toBe("Max");
});

test("validate intern school name", () => {
    const intern = new Intern('Max', 1, 'max@sampleemail.com', 'Intern', 'school');

    expect(intern.getSchool()).toBe("school");
});

