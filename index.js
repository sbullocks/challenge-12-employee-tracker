const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');
// Import and rquire asciiart-logo
const logo = require('asciiart-logo');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

  // TODO: Create an array of questions for user input
const questions = [
  {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
  },
  {
      type: 'input',
      message: 'What is the repository name of your project?',
      name: 'repo',
  },
  { //At a bare minimum, a README needs a title and a short description explaining the what, why, and how of the project.
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
  },
  { //What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
      type: 'input',
      message: 'Enter instructions for installation',
      name: 'installation',
  },
  { //Provide instructions and examples for use. Include screenshots as needed.
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
  },
  { //If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution',
  },
  { //Go the extra mile and write tests for your application. Then provide examples on how to run them here.
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test',
  },
  { //The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
      type: 'list',
      message: 'Choose a license for your project?',
      choices: ["ISC", "MIT", "Mozilla Public License 2.0"],
      name: 'license',
  },
  {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
  },
  { 
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
  },
];


