## Software testing

This project aims to give full examples on different types of
software tests using various software.

These tests will be carried out in [Sonarqube](https://www.sonarqube.org/).

## Setup

### Prerequisites

**WSL2 (Windows Subsystem for Linux)**

**Docker**

[Install docker](https://docs.docker.com/docker-for-windows/install/)

**Ubuntu for Windows**

If using windows, please download Ubuntu for Linux from the Microsoft store.

**NVM (Node version manager)**

```shell
# make sure Ubuntu for windows and WSL is installed before executing commands
# if running on windows, run below command
wsl -d Ubuntu
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# verify installation
command -v nvm
```

### Run Sonarqube image

```shell
cd software_testing
# build Sonarqube docker image
software_testing$ docker build -t sonarqube -f Dockerfile .
# run image
software_testing$ docker run -d --name sonarqube -p 9000:9000 sonarqube
```

Sonarqube should now be running on [this link](http://localhost:9000).

Make sure this is running and that you have scanned this project before running any of the tests.

### Scanning this project

Refer to [this link](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/) to scan the project.

**Running from the zip file**

Download sonar scanner for [Windows](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.4.0.2170-windows.zip), [Linux](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.4.0.2170-linux.zip) or [Mac](https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.4.0.2170-macosx.zip).

Extract the files and add the bin directory to your path.

```shell
# Windows
~$ sonar-scanner.bat
# Mac/Linux
~$ sonar-runner
```

**Running from Docker**

```shell
# pull sonar scanner from DockerHub
software-testing$ docker pull sonarsource/sonar-scanner-cli
# make sure you are in software-testing directory
software-testing$ docker run --rm -e SONAR_HOST_URL=http://host.docker.internal:9000 -it -v "/$(cd):/user/src" sonarsource/sonar-scanner-cli
```
