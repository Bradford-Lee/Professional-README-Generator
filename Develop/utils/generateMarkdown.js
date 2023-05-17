// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string (MIT, GPT,)
function renderLicenseBadge(license) {
  let result = "no license badge"
  if (license === 'MIT' || license === 'GPL' || license === 'test')  {
    result = `#### LICENSE BADGE \n 
    ![License:${license}](https://img.shields.io/badge/-${license}-red)`
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
  return `# ${data.title} \n
  ${data.tableOfContents}


  ## License
  ${renderLicenseBadge(data.license)}
  `;
}

// ${renderLicenseSection(data.license)}  
module.exports = generateMarkdown;
