// Import inquirer module
const inquirer = require('inquirer');
// Import file system
const fs = require('fs');
// Import Inquirer Choices module
const Choices = require('inquirer/lib/objects/choices');

const questions = require('./lib/questions');

const readMe = require('./lib/generator');


inquirer.prompt(questions).then(response => {
    const readMeContent = readMe(response)
    fs.writeFileSync("README(new).md",readMeContent);
});

