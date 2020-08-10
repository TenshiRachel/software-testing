## Puppeteer

This is an example of using Puppeteer with Jasmine framework for UI testing.

[Puppeteer docs](https://pptr.dev/)

[Jasmine docs](https://jasmine.github.io/)

## Setup

```shell
cd test_puppeteer
# install required packages
test_puppeteer$ npm install
# initialize jasmine
test_puppeteer$ npx jasmine init
```

## Run test

Before running, make sure you have changed the project name in constants.js to
your own Sonarqube project name.

```shell
test_puppeteer$ npm test test_sonarqube.js
```
