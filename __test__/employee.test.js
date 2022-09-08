const Employee = require('../lib/employee');
const employee = new Employee('Me', '3', 'me@email.me');

test('test if the constructor values can be retrieved', () => {
    expect(employee.name).toBe('Me');
    expect(employee.id).toBe('3');
    expect(employee.email).toBe('me@email.me');
});

test('test if name can be retrieved from getName() method', () => {
    expect(employee.getName()).toBe('Me');
});

test('test if id can be retrieved from getID() method', () => {
    expect(employee.getID()).toBe('3');
});

test('test if email can be retrieved from getEmail() method', () => {
    expect(employee.getEmail()).toBe('me@email.me');
});

test('test if role can be retrieved from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});