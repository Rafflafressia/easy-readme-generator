// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    // Project Title
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?:",
    },

    // Project Description
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of this application:",
    },

    // Installation Description 
    {
        type: "input",
        name: "installation",
        message: "Please provide the steps and software requirements to install your application:",
    },

    // Usage Details
    {
        type: "input",
        name: "usage",
        message: "Please describe how this application should be used:",
    },

    // List of Licenses
    {
        type: "list",
        name: "license",
        message: "Please select the license type:",
        choices: 
        [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License (GPL) Version 3",
            "BSD-3-Clause",
            "Cryptographic Autonomy License",
            "Mozilla Public License 2.0",
            "None",
        ]
    },

    // Contributors on Project
    {
        type: "input",
        name: "contributors",
        message: "Please include any contributors on this project:",
    },

    // Tests that were run, if any
    {
        type: "input",
        name: "tests",
        message: "Please explain testing implementation, if any:"
    },

    // GitHub Username
    {
        type: "input",
        name: "github",
        message: "Please enter your github username:"
    },

    // Email Address
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    const data = generateMarkdown(answers)
    fs.writeFile("README.md", data, (err) => {
        if (err) {
            console.log("Error Writing to File", err);
        }
        else {
            console.log("Data has been written to", fileName);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile("README.md", answers);
    })
    .catch(error => {
        console.log("Prompt Error", error);
    })
}

// Function call to initialize app
init();
