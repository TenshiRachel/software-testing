## Artillery

This is an example of load testing with [Artillery](https://github.com/artilleryio/artillery).

[Artillery docs](https://artillery.io/docs/guides/guides/test-script-reference.html#Using-dynamic-values-in-config)

### Setup

To start, install the required packages.

```shell
cd test_artillery
# install required packages
npm install
```

Next, use node version 12 or above with node version manager.

```shell
# install node version
nvm install 12.18.3
# use node version
nvm use 12.18.3
```

Make sure bin directory from artillery node modules folder is added to your system's environment variables.

### Run test

```shell
test_artillery$ artillery run test_sonar.yml
```