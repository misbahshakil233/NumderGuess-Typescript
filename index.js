#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.ceil(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess number between 1 to 10 : ",
    }
]);
if (answers.userGuessNumber === randomNumber) {
    console.log(" congraulation! you guess correct number");
}
else {
    console.log("you guess wrong number");
}
