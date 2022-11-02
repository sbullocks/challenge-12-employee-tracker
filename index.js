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

// Created an array of questions for user input
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
  { 
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
  },
  { 
      type: 'input',
      message: 'Enter instructions for installation',
      name: 'installation',
  },
  { 
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
  },
  { 
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution',
  },
  { 
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test',
  },
  { 
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
  
  
  
  
  