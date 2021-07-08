const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("can create an employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object"); 
});

test()