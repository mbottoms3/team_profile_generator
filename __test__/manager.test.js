const Manager = require('../lib/manager');
const manager = new Manager('Me', '3', 'me@email.me', '33');

test('test if the constructor values can be retrieved for the manager object', () => {
    expect(manager.name).toBe('Me');
    expect(manager.id).toBe('3');
    expect(manager.email).toBe('me@email.me');
    expect(manager.officeNumber).toBe('33');
});

test('test if name can be retrieved from getName() method', () => {
    expect(manager.getName()).toBe('Me');
});

test('test if id can be retrieved from getID() method', () => {
    expect(manager.getID()).toBe('3');
});

test('test if email can be retrieved from getEmail() method', () => {
    expect(manager.getEmail()).toBe('me@email.me');
});

test('test if officeNumber can be retrieved from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('33');
});

test('test if role can be retrieved from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});