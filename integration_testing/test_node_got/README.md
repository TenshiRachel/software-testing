## Node got

This is an example of integration testing with [got](https://github.com/sindresorhus/got) and [Jasmine](https://github.com/jasmine/jasmine) from node js.

[Jasmine docs](https://jasmine.github.io/)

### Setup

```shell
cd test_node_got
# install required packages
npm install
# initialize jasmine
npx jasmine init
```

### Run test

Make sure you put your auth token in constants.js before testing.

```shell
test_node_got$ npm test sonar_client/test_sonar.js
```