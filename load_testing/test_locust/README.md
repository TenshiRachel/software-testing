## Locust

This is an example of using Locust for load testing.

[Locust docs](https://docs.locust.io/en/stable/quickstart.html)

## Setup

```shell
cd test_locust
# install required packages
test_locust$ pip install -r requirements.txt
```

## Run test

Make sure you generate a token from Sonarqube and paste it in config.py as a string under USER_CREDENTIALS.

```python
USER_CREDENTIALS = [
    (your_generated_token, '')
]
```

Also make sure you change the project name in config.py to your own Sonarqube project name.

To start the test, execute the command below.

```shell
test_locust$ locust -f locustfile.py --host http://localhost:9000/ -u 10 -r 10
```

Next, go to [this link](http://127.0.0.1:8089/) and click the 'Start swarming' button.
