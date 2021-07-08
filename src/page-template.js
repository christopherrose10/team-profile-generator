const renderEngineerMember = addTeamMember => {
    for (let i = 1; i < addTeamMember.length; i++) {
        if (addTeamMember === 'Engineer') {
            return `
            <div class="card">
                <div class="card-header">${answers.engineerName}</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${answers.engineerId}</li>
                        <li class="list-group-item"><a href="${answers.engineerEmail}">Email</a></li>
                        <li class="list-group-item"><a href="https://github.com/${answers.engineerGit}" target="_blank">GitHub</a></li>
                    </ul>
            </div>
            `
        }

    }
}

// const renderInterMember

const generatePage = answers => {
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
                    <div class="card-header">${answers.teamManagerName}</div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${answers.managerId}</li>
                            <li class="list-group-item"><a href="${answers.managerEmail}">Email</a></li>
                            <li class="list-group-item">${answers.officeNumber}</li>
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