// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type:'input',
    name: 'title',
    message: "What's the name of your repo?"
    },
    {
    type:'input',
    name: 'description',
    message: "How would you describe your application?",
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
        type:'list',
        name: 'license',
        message: "Which license would you like to use?",
        choices: ['MIT', 'GNU', 'Apache', 'Mozilla']
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

];

const fileName = "README.md";
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeMarkdown = generateMarkdown(data);
    fs.writeFile(fileName, readmeMarkdown, err => {
    if (err) {
        console.log(err);
    }
    console.log('README.md is created')
});
}




// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile(fileName, data)
        })
}

// Function call to initialize app
init();

