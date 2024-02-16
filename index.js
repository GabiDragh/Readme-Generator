const fs = require("fs");
const path = require('path');//native to node as a library
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer
.prompt(//[
   // {
        //object keys from inquirer documentation
   // }
//]/questions) //can either pass const questions or pass the array straight in here
.then((answers) => { //callback function
    console.log(answers);
    fs.writeFile(`log.txt`, //answers.name 
    )
});

}

// function call to initialize program
init();

//fs.writeFile("./dir/README.md") - an example, assignment doesn't specify where it saves.

//biggest challenge - formatting (One way would be to create the README as a string with string literal, then write that to the file.) Use ``. #In front to get the readme bold. This is what Generate markdown folder is for. 
// Create the final README structure with string literal first, with #, ##, spaces etc., then just put the data where it is needed.