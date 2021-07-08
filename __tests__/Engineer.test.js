const Engineer = require("../lib/Engineer");

test("can create an engineer object", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object"); 

});

test("checks if name, id, email, and github can be recorded", () => {
    const engineer = new Engineer();

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
    expect(engineer.getGitHub()).toEqual(engineer.github);

});

test("checks the role of the engineer", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");

});