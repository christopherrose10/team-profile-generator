const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

const renderEngineerMember = () => {
    // for (let i = 1; i < Employee.length; i++) {
    //     if (teamChoice === 'Engineer') {
            return `
            <div class="card">
                <div class="card-header">Engineer: ${Engineer.name}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Engineer.id}</li>
                        <li class="list-group-item">Email: <a href="${Engineer.email}">${Engineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></li>
                    </ul>
            </div>
            `
        }

    


const renderInternMember = () => {
    for (let i = 1; i < Employee.length; i++) {
        if (teamChoice === 'Intern') {
            return `
            <div class="card">
                <div class="card-header">Intern: ${Intern.internName}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${Intern.internId}</li>
                        <li class="list-group-item">Email: <a href="${Intern.internEmail}">${Intern.internEmail}</a></li>
                        <li class="list-group-item">School: ${Intern.internSchool}</li>
                    </ul>
            </div>
            `
        }
    }
}

const generatePage = () => {
    console.log(Manager)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="card-deck">
                <div class="card">
                    <div class="card-header">Manager: ${Manager.name}</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${Manager.id}</li>
                            <li class="list-group-item">Email: <a href="${Manager.email}">${Manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${Manager.office}</li>
                        </ul>
                </div>
                ${renderEngineerMember}
                ${renderInternMember}
            </div>
        </main>
    </body>
    
    </html>
    `;
}

module.exports = generatePage;