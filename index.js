const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },
    {
        type: 'rawlist',
        message: 'Pick a license:',
        name: 'license',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
        ]
    },
    {
        type: 'input',
        message: 'What command should be ran to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be ran to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
    }
];

inquirer.prompt(questions).then((answers) => {
    utils.generatePage(answers);
});
