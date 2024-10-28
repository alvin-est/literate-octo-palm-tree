// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    } else if (license === "GNU GPLv3") {
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else if (license === "Apache 2.0") {
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (license === "BSD 3-Clause") {
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    } else {
      return "";
    }
  }
  
  // A function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === "GNU GPLv3") {
      return `[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === "Apache 2.0") {
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "BSD 3-Clause") {
      return `[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
    } else {
      return "";
    }
  }
  
  // A function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "None") {
      return "";
    } else {
      return `## License
      This project is licensed under the ${license} license.`;
    }
  }
  
  // A function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ## Contributing
    ${data.contributing}
    ## Tests
    ${data.tests}
    ## Questions
    If you have any questions, please contact me at ${data.email}. You can also find me on GitHub at [${data.github}]().  
  `;
  }
  
  module.exports = generateMarkdown;
  