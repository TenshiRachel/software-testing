## Cypress

This is an example of using Cypress with Mocha framework for UI testing.

[Cypress docs](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Mocha docs](https://mochajs.org/)

## Setup

```shell
cd test_cypress
# install required packages
test_puppeteer$ npm install
```

## Run test

Before runnning, make sure you have changed the project name in constants.js to your own Sonarqube 
project name.

```shell
# open cypress
test_cypress$ npx cypress open
```

You should now see the Cypress runner open. 

Now, click test_sonarqube.js to start the test.