// TODO: Include packages needed for this application
const inquirer= require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => [
        // username
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        // email 
        {
            type: 'input',
            name: 'email',
            message: "Enter your email",
        },
        // project title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the Porject?'
        },
        // add a description 
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of the project'
        },
        // license 
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [
                "MIT",
                "Unlicense",
                "Apache 2.0",
                "GNU v3",
                "BSD 3-Clause",
                "Mozilla Public License"
            ]
        },
        // installation instructions
        {
            type: 'input', 
            name: 'installation',
            message: 'What command should be run to install any dependencies?',
            default: 'npm i'
        },
        // run test
        {
            type: 'input',
            name: 'test',
            message: 'What should be run to run the tests?',
            default: 'npm run test'
        },
        // using the repository 
        {
            type: 'input',
            name: 'usage',
            message: 'What should people know about using the repository?'
        },
        // adding to the repository  
        {
            type: 'input',
            name: 'contribute',
            message: 'What should people know about contributing to the repository?'
        }
    ];

    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ?
        console.log(err) : console.log('Success!'))

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions)
    (function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();