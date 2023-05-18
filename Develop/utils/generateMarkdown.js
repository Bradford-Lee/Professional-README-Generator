// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string (MIT, GPT,)
function renderLicenseBadge(license) {
  let result = "No License Badge"
  if (license === 'MIT' || license === 'GPL' || license === 'Apache')  {
    result = `![License Badge](https://img.shields.io/license/badge/-${license}-red)`;
  }
  console.log (license)
  return result
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}\n
  ## Description: 
  ${data.description}\n
  ## Table of Contents: 
  1. [Description](##Description)
  2. [Video](## Video)
  3. [Installation](##Installation)
  4. [Usage](##Usage)
  5. [Contributing](##Contributing)
  6. [Tests](##Tests)
  7. [License](##License)
  8. [Questions](##Questions)\n
  ${data.tableOfContents}\n
  ## Installation: 
  ${data.installation}\n
  ## Usage: 
  ${data.usage}\n
  ## Contributing: 
  ${data.contributing}\n
  ## Tests: 
  ${data.tests}\n
  ## License: 
  This License is covered covered under the ${data.license} License\n
  ## Questions:
  GitHub Link:(https://github.com/${data.github})
  If you have any questions please reach out via Email @ ${data.email}
  `;
}

//${renderLicenseSection(data.license)}  
module.exports = generateMarkdown;
