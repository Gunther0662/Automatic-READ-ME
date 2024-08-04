// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is your projects title?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'What is the Description of your project?',
            name: 'description',
        },

        {
            type: 'input',
            message: 'Add Table of contents',
            name: 'contents',
        },

        {
            type: 'input',
            message: 'Is their steps to your project?',
            name: 'installation',
        },

        {
            type: 'input',
            message: 'Add a screenshot of your project',
            name: 'usage',
        },

        {
            type: 'input',
            message: 'Did anybody collaborated with you?',
            name: 'credits',
        },

        {
            type: 'list',
            message: 'What license is the project follow?',
            name: 'lincense',
            choices: ['MIT License, Apache 2.0, GNU, BSD, N/A '],
        },

        {
            type: 'input',
            message: 'Any badges that colorate with your project',
            name: 'badges',
        },

        {
            type: 'input',
            message: 'Any special features of your project?',
            name: 'features',
        },

        {
            type: 'input',
            message: 'Is there a way people can contribute to your project?',
            name: 'contribute',
        },

        {
            type: 'input',
            message: 'Any specific test that are needed for the project?',
            name: 'test',
        }

    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('filename', data, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("Your README file was created successfully")
      }
    });
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
