#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgRedBright.bold("!!!!!!WELL COME TO NUMBER GUESSING GAME!!!!!!"))
const aNumber =Math.floor(Math.random()*10 +1)

const anyNumber =await inquirer.prompt([
    {
        name:"userGuess",
        type:"number",
        message:"Enter number you guessed between 1 to 10)",
    },
    
]);
console.log(anyNumber);

if(anyNumber.userGuess === aNumber){
    console.log("GREAT! you guessed a correct number");
}
else{
    console.log("OOPSSS! your guess is not correct");
    console.log(`correct number is : ${aNumber}`)
}
