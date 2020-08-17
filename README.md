## Software testing

This project aims to give full examples on different types of
software tests using various software.

These tests will be carried out in [Sonarqube](https://www.sonarqube.org/).

## Setup

### Run Sonarqube image

```shell
cd software_testing
# build Sonarqube docker image
software_testing$ docker build -t sonarqube -f Dockerfile .
# run image
software_testing$ docker run -d --name sonarqube -p 9000:9000 sonarqube
```

Sonarqube should now be running on [this link](http://localhost:9000).

Make sure this is running when running any of the tests.

### Scanning this project

```shell
# pull sonar scanner from DockerHub
software-testing$ docker pull sonarsource/sonar-scanner-cli
# make sure you are in software-testing directory
software-testing$ docker run --rm -e SONAR_HOST_URL=http://host.docker.internal:9000 -it -v "$(cd)/user/src" sonarsource/sonar-scanner-cli
```
