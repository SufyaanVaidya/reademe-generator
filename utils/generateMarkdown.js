// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (data.license == 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (data.license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (data.license == 'Mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  return '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licenses = {
    MIT: `[This repo is licensed by MIT](https://opensource.org/licenses/MIT)`,
    GNU: '[This repo is licensed by GNU](https://www.gnu.org/licenses/gpl-3.0)',
    Apache: '[This repo is licensed by Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
    Mozilla: '[This repo is licensed by Mozilla Public](https://opensource.org/licenses/MPL-2.0)'
  }
  return licenses[data.license] || '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data)}

# Description
 - ${data.description}



# Installation
 - ${data.installation}




# Usage
 - ${data.usage}




# contributions
 - ${data.contributions}





# Tests
 - ${data.testing}





# License
 - ${renderLicenseSection(data)}





# Contact and Questions
 - Github: ${data.username}
 - Email: ${data.email}

`};


module.exports = generateMarkdown;
