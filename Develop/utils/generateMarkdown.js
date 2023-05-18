// Create a function that returns a license badge based on which license is passed in
// If there is no license, return a string "No License Badge"
function renderLicenseBadge(license) {
  let result = "No License Badge"
  if (license === 'MIT' || license === 'GPL' || license === 'Apache')  {
    result = `![License Badge](https://img.shields.io/badge/license-${license}-success)`;
  }
  console.log (license)
  return result
};

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}\n
  ## Description: 
  ${data.description}\n
  ## Table of Contents: 
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)\n

  ## Installation: 
  ${data.installation}\n
  ## Usage: 
  ${data.usage}\n
  ## Contributing: 
  ${data.contributing}\n
  ## Tests: 
  ${data.tests}\n
  ## License: 
  This License is covered under the ${data.license} License\n
  ## Questions:
  GitHub Profile: (https://github.com/${data.github})\n
  If you have any questions please reach out via Email at ${data.email}
  `;
}

module.exports = generateMarkdown;
