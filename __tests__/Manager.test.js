const Manager = require("../lib/Manager");

test("can create an manager object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object"); 

});

test("checks if name, id, email, and school can be recorded", () => {
    const manager = new Manager();

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
    expect(manager.getofficeNumber()).toEqual(manager.office);

});

test("checks the role of the manager", () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");

});