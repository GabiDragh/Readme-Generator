const fs = require("fs");
const path = require('path');//native to node as a library
const inquirer = require("inquirer");
const {generateMarkdown, generateTableOfContents} = require("./utils/generateMarkdown");

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
    // {
    //     type: `input`,
    //     message: `Would you like to create a table of contents`,
    //     name: `table-of-contents`,
    // },
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
        choices: [`GNU AGPLv3`, `Mozilla Public License 2.0`, `Apache License 2.0`, `MIT License`, `Boost Software License 1.0`, `The Unlicense`]
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

    //When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    //When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    // {
    //     type: `input`,
    //     message: `Please provide test instructions.`,
    //     name: `questions`,
    // }, 
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
    // define const generateBadge from generate markdown file and pass into const markdown below
    const markdown = generateMarkdown(answers, tableOfContents);

    fs.writeFile(`answers.md`, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}); 

}

// function call to initialize program
init();