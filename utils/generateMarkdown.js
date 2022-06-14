const fs = require('fs');

const generateLicense = (type) => {
  let color;
  if (type === "MPL") color = "red";
  if (type === "GPL") color = "gray";
  if (type === "Apache") color = "green";
  if (type === "MIT") color = "blue";
  if (type === "CC") color = "orange";
  if (type === "BSD") color = "goldenrod";

  return (
    `
    <h3>License</h3>
    <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" />
    `
  );
};

const generatePage = ({ gitHub, email, projectName, description, license, installation, tests, usage, contribution, }) => {
  console.log('Generation README...');
  const template = (`

# ${projectName}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Commad to run to install dependencies: ${installation}

## Usage

${usage}

## License

${generateLicense(license)}

## How to Contribute

${contribution}

## Tests

Command to run to run tests: ${tests}

## Questions

You can contact me at [${email}](mailto:${email})

[My Github profile](https://github.com/${gitHub})
  `);
  fs.writeFileSync('./output/README.md', template);
  console.log('TEMPLATE GENERATED');
  process.exit();
}

module.exports = {
  generatePage
};