const Intern = require('../lib/intern');
const intern = new Intern('Me', '3', 'me@email.me', 'DU');


test('test if the constructor values can be retrieved for the intern object', () => {
    expect(intern.name).toBe('Me');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('me@email.me');
    expect(intern.school).toBe('DU');
});

test('test if name can be retrieved from getName() method', () => {
    expect(intern.getName()).toBe('Me');
});

test('test if id can be retrieved from getID() method', () => {
    expect(intern.getID()).toBe('3');
});

test('test if email can be retrieved from getEmail() method', () => {
    expect(intern.getEmail()).toBe('me@email.me');
});

test('test if school can be retrieved from getSchool() method', () => {
    expect(intern.getSchool()).toBe('DU');
});

test('test if role can be retrieved from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});