## SAP Integration

This example uses [SAP's Document Classification client](https://github.com/SAP/document-classification-client)
with modifications as an example for integration testing.

## Setup

```shell
cd test_sap
# install required packages
test_sap$ pip install -r requirements.txt
```

## Run test

Before running, make sure you have generated a token from Sonarqube and 
inserted it as a string in sonar_client.py.

```python
def __init__(self,
                base_url='http://localhost:9000/',
                auth=(your_generated_token, ''),
                polling_threads=5,
                polling_sleep=0.5,
                polling_long_sleep=30,
                polling_max_attempts=400,
                logging_level=logging.WARNING):
```

Also make sure that you change the project name in constants.py to your own Sonarqube project name.

```shell
test_sap$ python -m pytest test_sonarqube.py
```
