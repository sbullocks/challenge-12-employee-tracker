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

// Created function for Roles.
  function roles() {
    inquirer
      .prompt([
        {
          type: "number",
          message:
            'Which department does the role belong to? Select # for department: "1" Engineering, "2" Finance, "3" Legal, "4" Sales, "5" Service',
          name: "department_id",
        },
        {
          type: "input",
          message: "What is the name of the role?",
          name: "title",
        },
        {
          type: "input",
          message: "What is the salary of the role?",
          name: "salary",
        },
      ])
      .then((answers) => {
        // console.log(typeof answers.department_id);
        console.log(answers);
        db.query("INSERT INTO roles SET ?", answers, function (err, results) {
          if (err) {
            console.log(err);
          } else {
            console.log(
              `Title: ${answers.title}, Salary: ${answers.salary}, Department: ${answers.department_id}`
            );
            menu();
          }
        });
      });
  }
// Created function for Employee. 
  function employee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the employee`s first name?",
          name: "first_name",
        },
        {
          type: "input",
          message: "What is the employee`s last name?",
          name: "last_name",
        },
        {
          type: "input",
          message:
            'What is the employee`s role Select # for role: "1" Sales Lead, "2" Salesperson, "3" Lead Engineer, "4" Software Engineer, "5" Account Manager, "6" Accountant, "7" Legal Team Lead, "8" Lawler',
          name: "role_id",
        },
      ])
      .then((answers) => {
        db.query(
          "INSERT INTO employee SET ?",
          answers,
          function (err, results) {
            if (err) {
              console.log(err);
            } else {
              console.log(
                `First Name: ${answers.first_name}, Last Name: ${answers.last_name}, Role ID: ${answers.role_id}`
              );
              menu();
            }
          }
        );
      });
  } 

  function menu() {
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
            ],
            name: 'selection',
        }
    ]).then(answers => {
        console.log(answers);

        if(answers.selection === 'View All Employees') {
            db.query('Select * FROM employee', function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.table(results);
                    menu();
                }
            });
        } else if (answers.selection === 'View All Departments') {
            db.query('Select name FROM department', function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.table(results);
                    menu();
                }
            });
        } else if (answers.selection === 'View All Roles') {
            db.query('Select title FROM roles', function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    console.table(results);
                    menu();
                }
            });    
        } else if (answers.selection === 'Add Employee') {
            employee();
        } else if (answers.selection === 'Add Role') {
            roles();
        }
        
    });
}
     

  // Function calls to initialize app and menu prompt
//   menu();
     roles();
//   init();
  
  // Created an array of questions for user input
// const questions = [
//   {
//       type: 'list',
//       message: 'View All Departments',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'viewAll',
//   },
//   {
//       type: 'list',
//       message: 'View All Roles',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'allRoles',
//   },
//   { 
//       type: 'list',
//       message: 'View All Employees',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'allEmployees',
//   },
//   { 
//       type: 'list',
//       message: 'Add A Department',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'addDepartment',
//   },
//   { 
//       type: 'list',
//       message: 'Add A Role',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'addRole',
//   },
//   { 
//       type: 'list',
//       message: 'Add An Employee',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'addEmployee',
//   },
//   { 
//       type: 'list',
//       message: 'Update An Employee Role',
//       choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
//       name: 'updateEmployeeRole',
//   },
// ];

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
  