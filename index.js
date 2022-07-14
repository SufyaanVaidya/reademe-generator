// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
    {
    type:'input',
    name: 'repo',
    message: "What's the name of your repo?"
    },
    {
    type:'input',
    name: 'description',
    message: "How would you describe your application?",
    default: 'Challenge Description',
    validate: function(answers) {
        if (answers.length == 0) {
            return console.log("please enter a valid description")
        }
        return true;
    }
    },
    {
        type:'input',
        name: 'installation',
        message: "Describe the steps you took to install the application."
    },
    {
        type:'input',
        name: 'usage',
        message: "Explain with examples on how to use the application."
    },
    {
        type:'input',
        name: 'contributions',
        message: "Please list all contributors for the application"
    },
    {
        type:'input',
        name: 'testing',
        message: "How can the app be tested?"
    },
    {
        type:'input',
        name: 'license',
        message: "Which license would you like to use?"
    },
    {
        type:'input',
        name: 'username',
        message: "What's your GitHub Username?"
    },
    {
        type:'input',
        name: 'email',
        message: "Please enter your email."
    },
])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

