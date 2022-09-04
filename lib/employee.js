const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        //write method
        return this.name
    }

    getID() {
        //write method
        return this.id
    }

    getEmail() {
        //write method
        return this.email
    }

    getRole() {
        //write method
        return "Employee"
    }
}

module.exports = Employee;


