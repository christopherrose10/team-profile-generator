const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


const managerArray = [];
const engineerArray = [];
const internArray = [];

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamManagerName',
            message: "What is your Team Manager's name?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is your employee ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number?"
        }
    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.teamManagerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            managerArray.push(manager);
            console.log(managerArray);
            //call next function 
            teamChoice();
        })
};

const teamChoice = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Would you like to add a team member?",
            choices: ['Engineer', 'Intern', 'Finished building team']
        }
    ])
        .then(answers => {
            switch (answers.addTeamMember) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default: finishBuild();
            }
        })
};

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Name of engineer:"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Employee ID of this team member?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Email address of this team member?"
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: "GitHub username of this team member?"
        }
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGit);
            engineerArray.push(engineer);
            console.log(engineerArray);
            //call next function 
            teamChoice();
        })
};

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Name of Intern:"
        },
        {
            type: 'input',
            name: 'internId',
            message: "Employee ID of this team member?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Email address of this team member?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "School of this team member?"
        }
    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            internArray.push(intern);
            console.log(internArray);
            //call next function 
            teamChoice();
        })
};


createManager();

const finishBuild = () => {

    const pageHTML = generateMarkdown(managerArray, engineerArray, internArray);

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw err;
        console.log('Team Portfolio complete! Check out index.html to see the output!');

    });

};

module.exports = createManager;
module.exports = teamChoice;
module.exports = createEngineer;
module.exports = createIntern;
module.exports = [managerArray];
