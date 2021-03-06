## Axios

This is an example of doing integration testing with [Axios](https://github.com/axios/axios)
with a [Jasmine framework](https://github.com/jasmine/jasmine).

[Jasmine docs](https://jasmine.github.io/)

## Setup

```shell
~$ cd test_axios
# install required packages
test_axios$ npm install
# initialize jasmine
test_axios$ npx jasmine init
```

## Run test

Before running, make sure you have placed your token as a string and replaced the project name with your own local Sonarqube project name in constants.js

To run the test, simply run the command below.

```shell
test_axios$ npm test sonar_client/test_sonar.js
```
