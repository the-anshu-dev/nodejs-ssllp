const inquirer = require('inquirer');
// import inquirer from 'inquirer';

// Define your questions
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?',
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password',
    mask: '*',
  },
  {
    type: 'list',
    name: 'color',
    message: 'Choose your favorite color',
    choices: ['Red', 'Green', 'Blue', 'Yellow'],
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('Your answers:');
    console.log(`Username: ${answers.username}`);
    console.log(`Password: ${answers.password}`);
    console.log(`Favorite Color: ${answers.color}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt could not be rendered in the current environment');
    } else {
      console.error('Something went wrong:', error);
    }
  });
