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

// Inquirer for user prompts
const inquirer = require("inquirer");

// Import our generateMarkdown module
const generateMarkdown = require("./utils/generateMarkdown");

// Import fs for file writing
const fs = require("fs");

// Welcome message
console.log("\n\nWelcome to README generator v0.1!\n");
console.log("\n\You will be guided through a series of prompts used to generate README.\n");

// Variables for user input
let title = description = installation = license = contributing = tests = email = github = "";

// Inquirer prompts
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
    title = response.title;
    description = response.description;
    installation = response.installation;
    license = response.license;
    contributing = response.contributing;
    tests = response.tests;
    email = response.email;
    github = response.github;
    // console.log(response);

    // Generate markdown
    const markdownContent = generateMarkdown({
        title,
        description,
        installation,
        license,
        contributing,
        tests,
        email,
        github
    });

    // Write to file
    fs.writeFile("README.md", markdownContent, (err) => {
        // Checks for error with the writeFile process
        if (err) {
            console.log("Error writing to file", err);
            return;
        } 
        
        console.log("\n\nREADME.md created successfully!\n");
    });
})
.catch((err) => {
    // Catches any general errors with the inquirer process
    console.log("Error", err);
});




