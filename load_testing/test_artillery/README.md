## Artillery

This is an example of load testing with [Artillery](https://github.com/artilleryio/artillery).

[Artillery docs](https://artillery.io/docs/getting-started/)

### Setup

To start, install the required packages.

```shell
cd test_artillery
# install required packages
npm install
```

Next, install nvm (Node version manager) and use node version 10.16.3 or above.

**Mac**

```shell
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# verify installation
command -v nvm
# install node version
nvm install node 10.16.3
# use node version
nvm use node 10.16.3
```

**Windows**

### Run test

```shell
test_artillery$ artillery run test_sonar.yml
```