const fs = require("fs");
const path = require('path');//native to node as a library
const inquirer = require("inquirer");
const {generateMarkdown, generateTableOfContents, generateBadge} = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: `input`,
        message: `What is the title of your project?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Please provide a project description.`,
        name: `description`,
    },
    {
        type: `input`,
        message: `Please provide installation instructions`,
        name: `installation`,
    },
    {
        type: `input`,
        message: `Please provide usage information.`,
        name: `usage`,
    },
    {
        type: `list`,
        message: `Please choose the license you would like to apply to your project`,
        name: `license`,
        choices: [`MIT License`, `GNU AGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `Boost Software License 1.0`, `The Unlicense`]
    },
    {
        type: `input`,
        message: `Please provide conntribution guidelines.`,
        name: `contributing`,
    },
    {
        type: `input`,
        message: `Please provide test instructions.`,
        name: `tests`,
    },
    {
        type: `input`,
        message: `Please enter your GitHub profile username for user questions.`,
        name: `username`,
    }, 
    {
        type: `input`,
        message: `Please enter your email address for user questions.`,
        name: `email`,
    },
];

// console.log(questions);

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
inquirer
 .prompt(questions)
 .then((answers) => { 
    console.log(answers); 
    // console.log(answers.title);
    const tableOfContents = generateTableOfContents(answers);
    const badge = generateBadge(answers);
    // define const generateBadge from generate markdown file and pass into const markdown below
    const markdown = generateMarkdown(answers, badge, tableOfContents);

    fs.writeFile(`answers6.md`, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}); 

}

// function call to initialize program
init();