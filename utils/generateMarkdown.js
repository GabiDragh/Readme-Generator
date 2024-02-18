// function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}

## Description 
${answers.description}

${generateTableOfContents(answers)}

## Instalation 
${answers.installation}

## Usage 
${answers.usage}

## License
This project is licensed under the ${answers.license}.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

`;
}

function generateTableOfContents(answers) {
  console.log("answers received:", answers);

  let tableOfContents = `## Table of Contents\n`;

  if (answers.description) {
    tableOfContents += `- [Description](#description)\n`;
  }
  if (answers.installation) {
    tableOfContents += `- [Installation](#installation)\n`;
  }
  if (answers.usage) {
    tableOfContents += `- [Usage](#usage)\n`;
  }
  if (answers.license) {
    tableOfContents += `- [License](#license)\n`;
  }
  if (answers.constributing) {
    tableOfContents += `- [Contributing](#contributing)\n`;
  }
  if (answers.tests) {
    tableOfContents += `- [Tests](#tests)\n`;
  }
  // if (answers.questions) {
  //   tableOfContents += `- [Questions](#questions)\n`;
  // }
  return tableOfContents;
}

//write function to generateBadge when the license is selected, add straight under the title

module.exports = {generateMarkdown, generateTableOfContents};
