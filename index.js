/* 

Alvin Estado
The Coding Bootcamp 

2024 ©

CREDITS & DISCLAIMER:
    xAI's Grok was used for semantic reference (syntax) in the making of this app.
    No robots were harmed. 
    Overall design (still) made by human.

*/

// let message = "Hello, World!";
// console.log(message);

const inquirer = require("inquirer");
// const colors = require("colors");

console.log("\n\nWelcome to README generator v0.1!\n");

inquirer.prompt([
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
    console.log("\n\nYou have decided to proceed.\n");

    console.log("You will be guided through a series of questions.");
    console.log("Each more daunting than the last.");
    console.log("Try to answer honestly.");
    console.log("You might just survive!");
    console.log("\n");
})
.then((nextResponse) => {

})
;







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