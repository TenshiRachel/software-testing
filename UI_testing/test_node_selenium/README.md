## Selenium WebDriver (JavaScript)

This is an example of UI testing with [Selenium WebDriver](https://github.com/SeleniumHQ/selenium) in JavaScript with [Jasmine framework](https://github.com/jasmine/jasmine).

[Selenium WebDriver docs](https://www.selenium.dev/selenium/docs/api/javascript/index.html)

[Jasmine docs](https://jasmine.github.io/)

### Setup

Make sure you have installed the required driver for the associated browser and browser vesrion from [here](https://www.selenium.dev/selenium/docs/api/javascript/index.html) and place the executable on your system path.

```shell
cd test_node_selenium
# install required packages
npm install
# initialize jasmine
npx jasmine init
```

### Run test

```shell
test_node_selenium$ npm test test_sonar.js
```