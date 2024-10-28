/* 

Alvin Estado
The Coding Bootcamp (USYD)

2024 ©

CREDITS & DISCLAIMER:
    xAI's Grok was used for semantic reference (syntax) in the making of this app.
    GitHub Copilot used for code block suggestions.
    No robots were harmed. 
    Overall effort (still) made by human.

*/

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// To-do: Also implement fs to write out to MD file in Markup with user responses

console.log("\n\nWelcome to README generator v0.1!\n");
console.log("\n\You will be guided through a series of prompts used to generate README.\n");

let title = description = installation = license = contributing = tests = email = github = "";

inquirer.prompt([
    {
        type: 'list',
        name: 'proceed',
        message: 'Proceed? (Y/n)',
        choices: ["Yes", "No"]
    },
    {
        type: 'input',
        name: 'title',
        message: 'Give your README a title.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'A description of what your project does.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can the user install this?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license should this fall under?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who were the main project contributors?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests were run?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Fill out your email address.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Fill out your GitHub username.'
    },
])
.then((response) => {
    if (response.proceed === "No") {
        console.log("\n\nExiting.\n")
        return;
    }
    // code here
    title = response.title;
    description = response.description;
    installation = response.installation;
    license = response.license;
    contributing = response.contributing;
    tests = response.tests;
    email = response.email;
    github = response.github;
    // console.log(response);
})

