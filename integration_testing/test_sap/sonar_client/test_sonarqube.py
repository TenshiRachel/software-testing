import constants

def test_get_coverage(api_client):
    res = api_client.get_project_coverage(constants.PROJECT)
    assert res.status_code == 200
