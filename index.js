/* 

Alvin Estado
The Coding Bootcamp (USYD)

2024 ©

CREDITS & DISCLAIMER:
    xAI's Grok was used for reference in the making of this app.
    GitHub Copilot was used for code block suggestions.
    No robots were harmed.
    Overall effort (still) made by human.

*/

// Use Inquirer for user prompts
const inquirer = require("inquirer");

// Import our generateMarkdown module
const generateMarkdown = require("./utils/generateMarkdown");

// Import fs for file writing
const fs = require("fs");

// Import path for file path operations
const path = require("path");

// Variables for user input
let title = description = installation = usage = license = contributing = tests = email = github = "";

// Console welcome message
console.log("\n\nWelcome to README generator v0.1!\n");
console.log("\n\You will be guided through a series of prompts used to generate README.\n");

// Start the app
init();

async function init() {
    const response = await inquirer.prompt([
        {
            type: 'list',
            name: 'proceed',
            message: 'Proceed? (Y/n)',
            choices: ["Yes", "No"]
        },
    ]);
    if (response.proceed === "No") {
        console.log("\n\nExiting.\n")
        return;
    }
    else {
        prompt();
    }
}

// Inquirer prompts
function prompt() {
    inquirer.prompt([
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
            name: 'usage',
            message: 'How can this application be used?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should this fall under?',
            choices: ["MIT", "GNU GPLv3", "GPL v3", "Apache 2.0", "BSD 3-Clause", "None"]
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
        // console.log(response);
        markdownOps(response);
    })
    .catch((err) => {
        // Catches any general errors with the inquirer process
        console.log("Error", err);
    });
}


// Write data to file
function markdownOps(data) {
    title = data.title;
    description = data.description;
    installation = data.installation;
    usage = data.usage;
    license = data.license;
    contributing = data.contributing;
    tests = data.tests;
    email = data.email;
    github = data.github;

    // Generate markdown
    const markdownContent = generateMarkdown({
        title,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        email,
        github
    });

    // File system operations
    const outputPath = path.dirname('./output/README.md');

    // Check if directory exists, create if not
    fs.access(outputPath, fs.constants.F_OK, (err) => {
        if(err) {
            // Directory does not exist - create it
            fs.mkdir(outputPath, { recursive: true }, (err) => {
                if (err) {
                    console.log("Error creating directory", err);
                    return;
                }
            });
        }
        else {
            // Directory exists
            write();
        }
    });

    // Write to file
    function write() {
        fs.writeFile('./output/README.md', markdownContent, (err) => {
            // Checks for error with the writeFile process
            if (err) {
                console.log("Error writing to file", err);
                return;
            } 
            
            console.log("\n\nREADME.md created successfully!\n");
        });
    }

}




