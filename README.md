# Midnight Arbitrage E-Commerce Back-end [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  A working back-end for an e-commerce website using Express.js, Sequelize, and MySQL. It runs in Insomnia.

  ## TOC
  1. [Installation](#installation)   
  2. [Usage](#usage)                 
  3. [Contributors](#contributors)
  4. [Tests](#tests)
  5. [Questions](#questions)

  ## Installation
  ***
  Type these commands into git bash to install the application. Midnight Arbitrage E-Commerce Back-end was created with
  [git bash](https://git-scm.com/) and [node package manager](https://nodejs.org/en/).

  ```
  $ git clone git@github.com:YellowYam/Midnight-Arbitrage-E-Commerce-Back-end.git
  $ cd ../path/to/the/file
  $ npm install
  ``` 

  ## Usage
   1. Run <code>npm start</code>
2. Open Insomnia.
3. Send a GET request to the webserver's products API. (localhost:{PORT}/api/products)
4. Repeat for all CRUD operations. 
5. Repeat steps 3-4 for the webserver's categories and tag API's. 

Example objects for each API.
Product

{
      "product_name": "Pizza Pie T-shirt",
      "category_id": 1, 
      "price": 15.35,
      "stock": 7,
      "tagIds": [3, 2, 1, 5]
}

Category

{
	"category_name": "Popsicles"
}

Tag
{
	"tag_name": "Dinosaurs"
}

#### A [Walkthrough Video] is available.

  ## Contributors
  If you would like to become a contributor on this project, please find my contact information in the [questions](#questions)
  section of this README.

  * Cody S. (YellowYam)

  ## Tests
  ![Issues](https://img.shields.io/github/issues/YellowYam/Midnight-Arbitrage-E-Commerce-Back-end?style=plastic)<br>
  At present, no tests can be performed on this code. The application meets all requirements without errors.

  ## Questions?
  <a href = "mailto:cody.scoles@gmail.com"> Email me! </a> <br>
  <a href = "https://www.github.com/YellowYam"> GitHub </a>

  ## License 

  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>
  (The license badge is a clickable link.)

