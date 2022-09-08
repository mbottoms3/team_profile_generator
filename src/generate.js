const generateTeam = (team) => {

    const html = [];


    const generateManager = manager => {
        let managerHtml = `
        <div class="card text-bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2> Name: ${manager.name}</h2>
            <h5><i class="fa-solid fa-mug-hot"></i> Manager </h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-bg-info"> ID: ${manager.id} </li>
                <li class="list-group-item text-bg-info"> Email: <a href="mailto:${manager.email}"> ${manager.email}</a> </li>
                <li class="list-group-item text-bg-info"> Office Number: ${manager.officeNumber} </li>
            </ul>
        </div>
        </div>
    </div>

        `;
        html.push(managerHtml);
    }

    const generateEngineer = engineer => {
        // console.log(engineer);
        let engineerHtml = `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2> Name: ${engineer.name}</h2>
            <h5><i class="fa-solid fa-glasses"></i> Engineer </h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineer.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                <li class="list-group-item"> Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</li>
            </ul>
        </div>
    </div>
        `;
        html.push(engineerHtml);
    }

    const generateIntern = intern => {
        let internHtml = `
        <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
            <h2> Name: ${intern.name}</h2>
            <h5><i class="fa-solid fa-user-graduate"></i> Intern </h5>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${intern.id}</li>
                <li class="list-group-item"> Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
                <li class="list-group-item"> School: ${intern.school}</li>
            </ul>
        </div>
    </div>
        `;
        html.push(internHtml);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
            }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        } 
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }  
    }
        
    return html.join('');
}


module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>Team Profiles</h1>
    </header>
    
    <main>
        ${generateTeam(team)}
    </main>
</body>
</html>
    `;
}
