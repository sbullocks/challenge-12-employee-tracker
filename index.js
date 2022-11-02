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
      type: 'input',
      message: 'View All Departments',
      name: 'viewAll',
  },
  {
      type: 'input',
      message: 'View All Roles',
      name: 'allRoles',
  },
  { 
      type: 'input',
      message: 'View All Employees',
      name: 'allEmployees',
  },
  { 
      type: 'input',
      message: 'Add A Department',
      name: 'addDepartment',
  },
  { 
      type: 'input',
      message: 'Add A Role',
      name: 'addRole',
  },
  { 
      type: 'input',
      message: 'Add An Employee',
      name: 'addEmployee',
  },
  { 
      type: 'input',
      message: 'Update An Employee Role',
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

// Created a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
      if (err) {
          console.log(err);
      } else {
          console.log('README file successfully created!');
      }
  })
};

// Created a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
  };
  
  // Function call to initialize app
  init();
  
  
  