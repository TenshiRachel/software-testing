from pytest import fixture
from test_client.sonar_client import SonarClient

@fixture
def api_client():
    return SonarClient()
