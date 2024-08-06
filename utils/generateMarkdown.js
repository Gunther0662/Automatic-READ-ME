// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {}
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (lincense !== "none") {}
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {}
  return "";
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
## Description
${data.description}
## Contents
${data.contents}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## Lincense
${data.lincense}
## Badges
${data.badges}
## Features
${data.features}
## Contribute
${data.contribute}
## Test
${data.test}
`;

}

module.exports = generateMarkdown;