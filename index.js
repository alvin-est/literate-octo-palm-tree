/* 

Alvin Estado
The Coding Bootcamp (USYD)

2024 ©

CREDITS & DISCLAIMER:
    xAI's Grok was used for semantic reference (syntax) in the making of this app.
    No robots were harmed. 
    Overall design (still) made by human.

*/

const inquirer = require("inquirer");
// To-do: Also implement fs to write out to MD file in Markup with user responses

console.log("\n\nWelcome to README generator v0.1!\n");

inquirer
.prompt([
    {
    type: 'list',
    name: 'proceed',
    message: 'Proceed? (Y/n)',
    choices: ["Yes", "No"]
    },
])  
.then((response) => {
    if(response.proceed === "No"  ) {
        console.log("\n\nExiting.\n")
        return;
    }
    console.log("\n");
    console.log('* --- --- --- --- --- *');
    console.log("\n");
    console.log("You have decided to proceed.\n");

    console.log("You will be guided through a series of questions.");
    console.log("Each more daunting than the last.");
    console.log("Try to answer honestly.");
    console.log("You might just survive!");
    console.log("\n");
    console.log('* --- --- --- --- --- *');
    console.log("\n");
})
.then((response) => {
    console.log('Let\'s create a README for your app project!');
    console.log('Answer the relevant questions below.');
    console.log('\n');


    return inquirer.prompt([
        {
            type: 'input',
            name: 'descQ1',
            message: 'What was your motivation?'
        },
        {
            type: 'input',
            name: 'descQ2',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'descQ3',
            message: 'What problem does it solve?'
        },
        {
            type: 'input',
            name: 'descQ4',
            message: 'What did you learn?'
        }
    ]).then((response) => {
        console.log('\n')
        console.log(`Motivation: \n${response.descQ1}\n`)
        console.log(`Why Behind the Project: \n${response.descQ2}\n`)
        console.log(`How does it help?: \n${response.descQ3}\n`)
        console.log(`Learnings: \n${response.descQ4}\n`)

    })
});








// if(!x) {
//     return;
// }

// inquirer
//   .prompt([
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//       type: "list",
//       message: "What is your favorite color?",
//       name: "color",
//       choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
//     }
//   ])
//   .then((response) =>
//     console.log(colors[response.color](`${response.text}`))
//   );









// /* starter code source: npmjs.com */
// inquirer
//   .prompt([
//     /* Pass your questions in here */

//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!

//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment

//     } else {
//       // Something else went wrong

//     }
//   });



  
// inquirer
//   .prompt([
//     {
//         type: "input",
//         message: "What text would you like to log?",
//         name: "text",
//         string: "userInput",
//     },
//     {
//       type: "list",
//       message: "What is your favorite color?",
//       name: "color",
//       choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
//     }
//   ])
//   .then((response) =>
//     console.log(colors[response.color](`${response.text}`))
//   );