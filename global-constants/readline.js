// *********************************
// Method 1 basic : Single question
// *********************************
// // step 1
// // require readline 
// // const { stdin, stdout } = require('process')
// const readline = require('readline');

// // step 2 
// // Create interface for I/O stram 
// const r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
//     // terminal:true
// })

// // step 3 
// // now we can use r1 as prompt  [question, answer] 
// r1.question("How are you ? ",(answer)=>{
//     console.log('Your answer : ', answer);

//     // step 4 
// // close the readline interface
//     r1.close()
// })








// ******************************
// Method 2 : Multi question 
// ******************************

// // step 1
// // require readline
// // const { stdin, stdout } = require('process')
// const readline = require("readline");

// // step 2
// // Create interface for I/O stram
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   // terminal:true
// });
// const question = [
//   {
//     question: "What is your name : ",
//     answer: "",
//   },
//   {
//     question: "Mobile number : ",
//     answer: "",
//   },
//   {
//     question: "Email address : ",
//     answer: "",
//   },
// ];

// // step 3
// // now we can use r1 as prompt  [question, answer]
// r1.question("Name : ", (name) => {
//   r1.question("Email : ", (email) => {
//     r1.question("Phone : ", (phone) => {
//       console.log("Your answer ");
//       console.log(`\n Name = ${name} \n Email = ${email} \n Phone = ${phone} \n`);
//       r1.close();
//     });
//   });

//   // step 4
//   // close the readline interface
// });






// Method 3 : Question as an Object formate 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password',
    mask: '*'
  },
  {
    type: 'list',
    name: 'color',
    message: 'Choose your favorite color',
    choices: ['Red', 'Green', 'Blue', 'Yellow']
  }
];

const askQuestion = (rl, question) => {
  return new Promise((resolve) => {
    rl.question(question.message + ' ', (answer) => {
      resolve(answer);
    });
  });
};

const askQuestions = async (questions) => {
  const answers = {};
  for (const question of questions) {
    let answer;
    if (question.type === 'list') {
      console.log(question.message);
      question.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
      });
      const index = await askQuestion(rl, 'Enter the number of your choice: ');
      answer = question.choices[parseInt(index) - 1];
    } else {
      answer = await askQuestion(rl, question);
    }
    answers[question.name] = answer;
  }
  return answers;
};

askQuestions(questions).then((answers) => {
  rl.close();
  console.log('Your answers:');
  console.log(`Username: ${answers.username}`);
  console.log(`Password: ${answers.password}`);
  console.log(`Favorite Color: ${answers.color}`);
}).catch((error) => {
  console.error('Something went wrong:', error);
  rl.close();
});
