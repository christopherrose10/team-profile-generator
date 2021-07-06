const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/page-template');

const questions = [
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
    },
    {
        type: 'list',
        name: 'addTeamMember',
        message: "Would you like to add a team member?",
        choices: ['Engineer', 'Intern', 'Finished building team'] 
    },
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
    },
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
        name: 'internGit',
        message: "GitHub username of this team member?"
    },
];

const promptUser = () => {
    return inquirer.prompt(questions)
        .then(data => {
            const pageHTML = generateMarkdown(data);

            fs.writeFile('index.html', pageHTML, err => {
                if (err) throw err;
                console.log('Team Portfolio complete! Check out index.html to see the output!');

            });
        });
};

promptUser();
