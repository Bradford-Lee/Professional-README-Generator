// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// Create an array of questions for user input
function startPrompt() {
    inquirer.prompt([ 
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your Project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the steps for the installation:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Pick a license from the list (MIT, GPL, Apache):'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'List any collaborators or contributors:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email:'
        }
    ]).then((data) => {
        const readme = generateMarkdown(data)
        console.log(readme)
        console.log(data)
        if (!readme) {
            console.error("Error generating markdown")
            process.exitCode = 1
            process.exit()
        }        
    writeToFile(readme)
    }).catch((err) => console.log(err))
};

// Create a function to write README file
function writeToFile(readme) {
    // add fs code here to save file
    fs.writeFile("README.md", readme, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Success!");
        }
    })
};

// Create a function to initialize app
function init() {
    startPrompt()
}

// Function call to initialize app
init();
