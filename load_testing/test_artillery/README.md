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

Next, install nvm (Node version manager) and use node version 12 or above.

```shell
# if running on windows, run below command
wsl -d Ubuntu
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# verify installation
command -v nvm
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