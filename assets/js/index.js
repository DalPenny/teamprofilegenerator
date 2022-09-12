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
        var addlQuestn = "";
        if (role === "Manager") {
            addlQuestn = "Office number";
        } else if (role === "Engineer") {
            addlQuestn = "Git username";
        } else if (role === "Intern") {
            addlQuestn = "School";
        } 
        inquirer.prompt([{
                type: 'input',
                name: 'addlInput',       // To get additional input related to the role
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
        .then(function({addlInput, addTeamMembers}) {
            let newEmployee;
            if (role === "Manager") {
                newEmployee = new Manager(name, id, email, addlInput);
            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, addlInput);
            } else if (role === "Intern") {
                newEmployee = new Intern(name, id, email, addlInput);
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
    console.log ("build Html header");
}

//append to html
function addHtml(){
    console.log ("appending to Html:");
};

//write end of html
function endHtml(){
    console.log ("end writing Html");
};

init();