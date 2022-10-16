// Packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please give a description of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide the usage information for your project: ',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please indicate which license you would like to include for this project: ',
        name: 'license',
        choices: ['MIT', 'Apache', 'BSD', 'No license for this application']
    },
    {
        type: 'input',
        message: 'Please provide the information necessary for individuals interested in contributing to this project: ',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide test instructions for your project: ',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email'
    }
];

// Function that writes the README file
function writeToFile(data) {
    const READMEContent = generateMarkdown(data);

    fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md file.'))
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile);
}

// Function call to initialize app
init();
