const Engineer = require('../lib/engineer');
const engineer = new Engineer('Me', '3', 'me@email.me', 'mbottoms3');


test('test if the constructor values can be retrieved for the engineer object', () => {
    expect(engineer.name).toBe('Me');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('me@email.me');
    expect(engineer.github).toBe('mbottoms3');
});

test('test if name can be retrieved from getName() method', () => {
    expect(engineer.getName()).toBe('Me');
});

test('test if id can be retrieved from getID() method', () => {
    expect(engineer.getID()).toBe('3');
});

test('test if email can be retrieved from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('me@email.me');
});

test('test if github can be retrieved from getOfficeNumber() method', () => {
    expect(engineer.getGithub()).toBe('mbottoms3');
});

test('test if role can be retrieved from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});