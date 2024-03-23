#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to the number guessing game!");
async function startGame() {
    const randomNumber = Math.ceil(Math.random() * 10);
    let playing = true;
    while (playing) {
        const answers = await inquirer.prompt([
            {
                name: "userGuessNumber",
                type: "number",
                message: "Please guess a number between 1 to 10: "
            }
        ]);
        if (answers.userGuessNumber === randomNumber) {
            console.log("Congratulations! You guessed the correct number.");
        }
        else {
            console.log("Sorry, you guessed the wrong number.");
        }
        const again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to play again? (y/n): "
        });
        playing = (again.restart.toLowerCase() === 'y');
    }
}
startGame();
