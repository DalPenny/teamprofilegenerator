const inquirer = require("inquirer");
const fs = require("fs");

// Load Team Profile
const Engineer = require("../../lib/engineer");
const Intern = require("../../lib/intern");
const Manager = require("../../lib/manager");

function init() {
    buildHtml();
    addEmployee();
};

let addlQuestn = "";
let addlInfotxt = "";

// Create an array of questions for user input 
function addEmployee(){
    inquirer.prompt([

{
    type: 'input',
    name: 'name',
    message: "Enter your team member's name: ",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Error: Please enter your team member's name:");
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter your team member's ID: ",
      validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log("Error: Please enter your team member's ID:");
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter your team member's email: ",
      validate: emailInput => {
          if (emailInput) {
              return true;
          } else {
              console.log("Error: Please enter your team member's email:");
              return false;
          }
      }
    },
    {
      type: 'list',
      name: 'role',
      message: "Please select your team member's role",
      choices: ['Manager', 'Engineer', 'Intern', 'no more team members to add'],
      validate: roleInput => {
          if (roleInput) {
              return true;
          } else {
              console.log('Error: Please select a role for your team member');
              return false;
          }
        }
      }
    ])

    .then(function({name, id, email, role}) {
        if (role === "Manager") {
            addlQuestn = "Office number";
        } else if (role === "Engineer") {
            addlQuestn = "Git username";
        } else if (role === "Intern") {
            addlQuestn = "School";
        } 
        inquirer.prompt([{
                type: 'input',
                name: 'addlInfo',       // To get additional input related to the role
                message: `Enter ${role}'s ${addlQuestn}`,
                
            },
            {
                type: "list",
                name: "addTeamMembers",
                message: "Do you have anymore team members to add?",
                choices: [
                    "yes",
                    "no"
                ],
            }
        ])

        // Write to html file 
        .then(function({addlInfo, addTeamMembers}) {
            let newEmployee;
            addlInfotxt = addlInfo;
            // console.log(`display ${addlInfotxt}`); //just for testing addlInfo value
            if (role === "Manager") {
                newEmployee = new Manager(name, id, email);
            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email);
            } else  {console.log("Error: invalid role") ;
                    return false;

            }
            
            addHtml(newEmployee)
           
                if (addTeamMembers === "yes") {
                    addEmployee();
                } else {
                    endHtml();
                }
        });
    });
};

//build html header
function buildHtml(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.2/dist/flowbite.min.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/fb81218133.js" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
    </head>
<!-- Header -->
    <body>
        <header>
            <div class="header-container p-5 text-center text-[25px] bg-green-100 box-border border-8 border-pink-200"><b>Team Profile</b>
            </div>
        </header>
    <!-- Main container -->
    <main>
        <div class="main-container flex space-x-6 justify-between">`;

     fs.writeFile("../../index.html", html, function(err) {
        if (err) {
                console.log(err);
                 }
    });
    console.log ("Building the Html header");
}

//append to html
function addHtml(newEmployee){
    const name = newEmployee.getName();
    const id = newEmployee.getId();
    const email = newEmployee.getEmail();
    const role = newEmployee.getRole();

    bodydata = ` 
            <div class="card mx-auto bg-blue mb-3 flex-row box-border border-8 border-violet-300" style="width: 18rem">
             <h5 class="card-header bg-teal-200">${name}<br/>${role}</h5>
             <ul class="list-group list-group-flush flex-row">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: <a href= "mailto:${email}"> ${email}</a></li>
                <li class="list-group-item">${addlQuestn}: ${addlInfotxt}</li>
             </ul>
            </div>`;

    fs.appendFile("../../index.html", bodydata, function(err) {
        if (err) {
                console.log(err);
                 }
    });

    console.log ("Appending to Html:");
};

//write end of html
function endHtml(){
    const html = ` 
        </div>
    </body>
    </html>`;

    fs.appendFile("../../index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });

    console.log ("End writing Html");
};

init();