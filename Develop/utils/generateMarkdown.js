// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string (MIT, GPT,)
function renderLicenseBadge(license) {
  let result = "No License Badge"
  if (license === 'MIT' || license === 'GPL' || license === 'Apache')  {
    result = `#### LICENSE BADGE
    ![License:${license}](https://img.shields.io/badge/-${license}-red)`;
  }
  console.log (license)
  return result
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  ## Title: 
  ${data.title}\n
  ## Description: 
  ${data.description}\n
  ## Table of Contents: 
  ${data.tableOfContents}\n
  ## Installation: 
  ${data.installation}\n
  ## Usage: 
  ${data.usage}\n
  ## License: 
  This License is covered covered under the ${data.license} License\n
  ## Contributing: 
  ${data.contributing}\n
  ## Tests: 
  ${data.tests}\n
  ## Questions:
  ${data.questions}
  `;
}

//${renderLicenseSection(data.license)}  
module.exports = generateMarkdown;
