const Intern = require("../lib/Intern");

test("can create an intern object", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object"); 

});

test("checks if name, id, email, and school can be recorded", () => {
    const intern = new Intern();

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
    expect(intern.getSchool()).toEqual(intern.school);

});

test("checks the role of the intern", () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");

});