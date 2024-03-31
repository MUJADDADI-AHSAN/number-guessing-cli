#! /usr/bin/env node
import inquirer from "inquirer";
// step 1: computer will generate a random number
// step 2: we take a input from user of any number
// step 3: now we compare user guessed number and computer generated number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { message: "GUESS A NUMBER Between 1 to 6 :",
        name: "userGuessedNumber",
        type: "number", }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation's you guessed it right!!");
}
else {
    console.log("You Guessed The Wrong Number");
}
