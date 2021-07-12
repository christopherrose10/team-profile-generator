const Employee = require("../lib/Employee");

test("can create an employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object"); 

});

test("checks if name, id, and email can be recorded", () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
});

test("checks the role of the employee", () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");

});
