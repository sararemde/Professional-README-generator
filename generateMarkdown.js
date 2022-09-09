// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  "MIT"; "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Unlicense"; "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "Apache 2.0"; "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU v3"; "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause"; "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Mozilla Public License 2.0"; "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}

module.exports = renderLicenseBadge

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

module.exports = renderLicenseLink
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

module.exports = renderLicenseSection
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing: 
  [[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT]

  ## Table of Contents
  *[Installation Instructions](#installation-instructions)
  *[Usage Information](#usage-information)
  *[License](#license)
  *[Contribution Guidelines](#contribution-guidelines)
  *[Tests](#tests)
  *[Questions](#questions)
  *[Overview](#overview)
  *[Screenshots](#screenshots)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contribution Guidelines
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Overview: What we accomplished

  ## Screenshots

  ## Questions
  Questions? contact me directly at ${data.email}. My github is https://github.com/${data.github}, and my username is ${data.username}.

`;
}

module.exports = generateMarkdown;
