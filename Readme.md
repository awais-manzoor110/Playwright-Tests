#  Test Cases with Playwright TypeScript

This repository contains assignment test cases implemented using Playwright and TypeScript. The tests are organized using the Page Object Model (POM) design pattern for better maintainability and readability.

## Setup and Usage:

**Prerequisites:** Ensure you have Node.js and npm (Node Package Manager) installed on your system.

**Clone the Repository:** Clone this repository to your local machine using git clone https://github.com/awais-manzoor110/Playwright-Tests.git

**Install Dependencies:** Navigate to the project directory and run npm install to install the necessary dependencies.

Install Playwrights: Navigate to the project directory and run

    npm init playwright@latest

**Configure Tests:** Open the configuration file (playwright.config.js) and update it with the required settings such as the browser type and other options.

## Usage

### Running UI Tests

To run the UI tests, execute the following command:

    npm run ui-tests

### Running API Tests

    npm run api-tests

**_Note:_** Before running the API tests, please ensure you have updated the username and secondUsername values in the api-data file with appropriate values.
