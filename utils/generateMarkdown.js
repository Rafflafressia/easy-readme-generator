// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
  return `# ${data.title}

  ## Table of Contents
  - [Description]{#description}
  - [Installation]{#installation}
  - [Usage]{#usage}
  - [License]{#license}
  - [Contributors]{#contributors}
  - [Tests]{#tests}
  - [Questions]{#questions} 

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  For more details please see GitHub repository ${data.github}. 
  To reach out to me directly, please contact me at ${data.email}.
 `;
}

module.exports = generateMarkdown;
