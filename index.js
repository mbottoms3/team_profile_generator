// create classes, methods 
// index.js will kick everything off
// use inquirer to ask questions in the terminal
// based on responses, perform certain functions-build object based on responses. run function to add another employee or be done.  build a function to loop and append.  add to an array and then dynamically build the finished array
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "team.html");

const generateJS = require('./src/generate');

//Empty Array
const teamMembers = [];


//Const to ask questions/get data and pass to the Empty Array
const promptManager = () => {
    return inquirer.prompt ([
    {
        type: "input",
        message: "What is the manager's name?",
        name: "mgrName" 
    },

    {
        type: "input",
        message: "What is the manager's id?",
        name: "mgrId"
    },

    {
        type: "input",
        message: "What is the manager's email?",
        name: "mgrEmail"
    },

    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNum"
    }
])
.then(answers => {
    console.log(answers);
    const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.officeNum);
    teamMembers.push(manager);
    mainMenu();
})
};

// Will get called after finishing manager prompt or anytime user wants to add another employee
const mainMenu = () => {
    return inquirer.prompt ([
        {
            type: "list",
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
            name: "menu"
        }
    ])
    .then(userSelection => {
        switch (userSelection.menu) {
            case "Add Engineer":
                promptEngineer();
                break;
            case "Add Intern":
                promptIntern();
                break;
            default:
                buildTeam();
                break;
        }
    });
};

const promptEngineer = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "engName"
        },

        {
            type: "input",
            message: "What is the engineer's id?",
            name: "engId"
        },

        {
            type: "input",
            message: "What is the engineer's email?",
            name: "engEmail"
        },

        {
            type: "input",
            message: "What is the engineer's github?",
            name: "github"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.github);
        teamMembers.push(engineer);
        mainMenu();

    })
};

const promptIntern = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "intName"
        },

        {
            type: "input",
            message: "What is the intern's id?",
            name: "intId"
        },

        {
            type: "input",
            message: "What is the intern's email?",
            name: "intEmail"
        },

        {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.school);
        teamMembers.push(intern);
        mainMenu();
    })
};

// Gets called if user is done adding employees
const buildTeam = () => {
    console.log("finished!");
    if(!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR)
    }
    fs.writeFileSync(outputPath, generateJS(teamMembers), "utf-8");
}

// Kicks off prompts 
promptManager();