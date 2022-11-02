const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
// Import and rquire asciiart-logo
const logo = require('asciiart-logo');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Devon10422401%',
      database: 'employer_db'
    },
    console.log(`Connected to the employer_db database.`)
  );

// Created an array of questions for user input
const questions = [
  {
      type: 'list',
      message: 'View All Departments',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'viewAll',
  },
  {
      type: 'list',
      message: 'View All Roles',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'allRoles',
  },
  { 
      type: 'list',
      message: 'View All Employees',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'allEmployees',
  },
  { 
      type: 'list',
      message: 'Add A Department',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'addDepartment',
  },
  { 
      type: 'list',
      message: 'Add A Role',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'addRole',
  },
  { 
      type: 'list',
      message: 'Add An Employee',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'addEmployee',
  },
  { 
      type: 'list',
      message: 'Update An Employee Role',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'updateEmployeeRole',
  },
  // { 
  //     type: 'list',
  //     message: 'Choose a license for your project?',
  //     choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
  //     name: 'license',
  // },
  // {
  //     type: 'input',
  //     message: 'What is your GitHub username?',
  //     name: 'username',
  // },
  // { 
  //     type: 'input',
  //     message: 'What is your email address?',
  //     name: 'email',
  // },
];

// Created a function to write README file... not creating any files.
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//       if (err) {
//           console.log(err);
//       } else {
//           console.log('README file successfully created!');
//       }
//   })
// };

// Created a function to initialize app... not needed for this, not writing a file.
// function init() {
//   inquirer.prompt(questions).then(function (data) {
//     writeToFile("README.md", generateMarkdown(data));
//   });
//   };

  
  // Function call to initialize app
  init();
  
  
  