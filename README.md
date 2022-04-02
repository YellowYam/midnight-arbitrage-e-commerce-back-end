# Midnight Arbitrage E-Commerce Back-end [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## Description
***
  A working back-end for an e-commerce website using Express.js, Sequelize, and MySQL. It runs in Insomnia.

## TOC
***
  1. [Installation](#installation)   
  2. [Usage](#usage)                 
  3. [Contributors](#contributors)
  4. [Tests](#tests)
  5. [Questions](#questions)

## Installation
***
### Git Bash
  ***
  Type these commands into git bash to install the application. Midnight Arbitrage E-Commerce Back-end was created with
  [git bash](https://git-scm.com/) and [node package manager](https://nodejs.org/en/). It runs in [Insomia](https://insomnia.rest/download).

  ```
  $ git clone git@github.com:YellowYam/midnight-arbitrage-e-commerce-back-end.git
  $ cd ../path/to/the/file
  $ npm install
  ``` 

  
  Node Modules:
  + [dotenv](https://www.npmjs.com/package/dotenv) - enables the .env environment file
  + [express](https://www.npmjs.com/package/express) - frameworks the JavaScript back-end
  + [sequelize](https://www.npmjs.com/package/sequelize) - an object-relational mapper.


### MySQL
***

  The database must be installed onto your personal PC to load the database. [This Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) contains all the instructions. Once the database has been installed, the schema must be loaded into the database.

  1. Navigate to <code>/cd/path/to/application</code> in a bash console.
  2. Run <code>mysql -u root -p</code>
  3. Enter your database password.
  4. Run <code>source ./db/schema.sql</code>
  5. Run <code>exit</code> to exit MySQL shell.

## Usage
***
1. Navigate to the application directory.
2. Run <code>code .</code> to edit your environment variables. (Save your changes.)
3. Rename <code>.env_Example</code> to <code>.env</code>.
3. Run <code>node ./seeds/index.js</code> to seed the database.
4. Run <code>npm start</code>
5. Open Insomnia.
6. Send a GET request to the webserver's products API*. <br>*(localhost:{PORT}/api/products) -- The default port is 3001.
7. Repeat for all CRUD operations. 
8. Repeat steps 3-4 for the webserver's categories and tag API's. 

Example objects for each API. <br>

Product
```
{
      "product_name": "Pizza Pie T-shirt",
      "category_id": 1, 
      "price": 15.35,
      "stock": 7,
      "tagIds": [3, 2, 1, 5]
}
```
Category
```

{
	"category_name": "Popsicles"
}
```
Tag
```
{
	"tag_name": "Dinosaurs"
}
```

#### A [Walkthrough Video] is available.

  ## Contributors
  ***
  If you would like to become a contributor on this project, please find my contact information in the [questions](#questions)
  section of this README.

  * Cody S. (YellowYam)

  ## Tests
  ***
  ![Issues](https://img.shields.io/github/issues/YellowYam/Midnight-Arbitrage-E-Commerce-Back-end?style=plastic)<br>
  At present, no tests can be performed on this code. The application meets all requirements without errors.

  ## Questions?
  ***
  <a href = "mailto:cody.scoles@gmail.com"> Email me! </a> <br>
  <a href = "https://www.github.com/YellowYam"> GitHub </a>

  ## License 
  ***

  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>
  (The license badge is a clickable link.)
