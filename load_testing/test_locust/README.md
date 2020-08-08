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

```shell
test_locust$ locust -f locustfile.py --host http://localhost:9000/ -u 10 -r 10
```

Next, go to [this link](http://127.0.0.1:8089/) and click the 'Start swarming' button.
