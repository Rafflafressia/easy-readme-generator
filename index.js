// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of this application",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the steps and software requirements to install your application",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how this application should be used",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license type"
        choices: 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
