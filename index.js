#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
console.log(chalk.cyanBright('\nWelcome to Number Guessing game by Mahad Nawaz Khan\n'));
let exit = false;
while (!exit) {
    const ramdom = Math.floor(Math.random() * 10);
    const choice = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: chalk.italic.rgb(255, 165, 0)('Main Menu\n\t'),
        choices: ['PLAY', 'EXIT'],
        prefix: "      "
    });
    if (choice.choice == 'EXIT') {
        console.log(chalk.yellow('Thank You For Running My Program \n'));
        console.log('='.repeat(70) + '\n');
        exit = true;
        process.exit();
    }
    else if (choice.choice == 'PLAY') {
        const question = await inquirer.prompt({
            type: 'input',
            name: 'input',
            message: 'Guess a number from 1 to 10',
            prefix: chalk.green('\n>')
        });
        if (question.input == ramdom) {
            console.log(chalk.bold.green('\nCongratulation You Guessed The Right Number\n'));
        }
        else {
            console.log(chalk.bold.red('\nSorry You Guessed Wrong Number\n'));
        }
    }
    console.log('='.repeat(70) + '\n');
}
