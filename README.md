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
software_testing$ docker run -it --rm -v home/software_testing -p 9000:9000 sonarqube
```

Sonarqube should now be running on [this link](http://localhost:9000).

Make sure this is running when running any of the tests.
