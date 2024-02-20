// Function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}

${generateBadge(answers)}

## Description 
${answers.description}

${generateTableOfContents(answers)}

## Installation 
${answers.installation}

## Usage 
${answers.usage}

## License
This project is licensed under the ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
You can find my GitHub profile [here](https://github.com/${answers.username})\n

For additional questions, please email me at ${answers.email}

`;
}

//Function to generate the Table of Contents depending on the user input
function generateTableOfContents(answers) {
  console.log("answers received:", answers);

  let tableOfContents = `## Table of Contents\n`; //\n used for new line

  if (answers.installation) {
    tableOfContents += `- [Installation](#installation)\n`;
  }
  if (answers.usage) {
    tableOfContents += `- [Usage](#usage)\n`;
  }
  if (answers.license) {
    tableOfContents += `- [License](#license)\n`;
  }
  if (answers.contributing) {
    tableOfContents += `- [Contributing](#contributing)\n`;
  }
  if (answers.tests) {
    tableOfContents += `- [Tests](#tests)\n`;
  }
  if (answers.username, answers.email) {
    tableOfContents += `- [Questions](#questions)\n`;
  }
  // if (answers.email) {
  //   tableOfContents += `- [Questions](#questions)\n`;
  // }
  return tableOfContents;
}

//write function to generateBadge when the license is selected, add straight under the title
function generateBadge(answers) {
let badgeLink = "";

if (answers.license === "MIT License") {
  badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else if (answers.license === "GNU AGPLv3") {
  badgeLink = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
} else if (answers.license === "Mozilla Public License 2.0") {
  badgeLink = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
} else if (answers.license === "Apache License 2.0") {
  badgeLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} else if (answers.license === `Boost Software License 1.0`) {
  badgeLink = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
} else if (answers.license === `The Unlicense`) {
  badgeLink = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
} else {
  badgeLink = `None selected`
}
  console.log(badgeLink);
  return badgeLink;
}


module.exports = {generateMarkdown, generateTableOfContents, generateBadge};
