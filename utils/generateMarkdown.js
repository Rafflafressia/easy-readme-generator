// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = " ";

  switch (license) {
    // Switch statement for difference licenses
    case "MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Apache License 2.0":
      badge = "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/license/apache-2-0)";
      break;

    case "GNU General Public License (GPL) Version 3":
      badge = "[![License: GNU General Public License Version 3](https://img.shields.io/badge/License-GPL-purple.svg)](https://opensource.org/license/gpl-3-0)";
      break;

    case "BSD-3-Clause":
      badge = "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD3-yellow.svg)](https://opensource.org/license/bsd-3-clause/)";
      break;

    case "Cryptographic Autonomy License":
      badge = "[![License: Cryptographic Autonomy License](https://img.shields.io/badge/License-CALv1.0-green.svg)](https://opensource.org/license/cal-1-0/)";
      break;

    case "Mozilla Public License 2.0":
      badge = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPLv2-green.svg)](https://opensource.org/license/mpl-2-0/)";
      break;

    default:
      badge = " ";
      break;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = " ";

  // Switch statement for difference license
  switch (license) {
    case "MIT License":
      link = "https://opensource.org/licenses/MIT";
      break;

    case "Apache License 2.0":
      link = "https://opensource.org/license/apache-2-0";
      break;

    case "GNU General Public License (GPL) Version 3":
      link = "https://opensource.org/license/gpl-3-0/";
      break;

    case "BSD-3-Clause":
      link = "https://opensource.org/license/bsd-3-clause";
      break;

    case "Cryptographic Autonomy License":
      link = "https://opensource.org/license/cal-1-0/";
      break;

    case "Mozilla Public License 2.0":
      link = "https://opensource.org/license/mpl-2-0/";
      break;

    default:
      link = " ";
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  [${license}](${renderLicenseLink(license)}) for more information.
    `
  }
  else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  const licenseSection = renderLicenseSection(answers.license)

  return `# ${answers.title} 

  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions) 

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ${licenseSection}

  ## Contributors
  ${answers.contributors}

  ## Tests
  ${answers.tests}

  ## Questions
  For more details please see GitHub repository https://github.com/${answers.github}. 
  To reach out to me directly, please contact me at ${answers.email}.
 `;
}

module.exports = generateMarkdown;
