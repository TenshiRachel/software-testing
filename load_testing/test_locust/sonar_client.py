import config

class SonarqubeClient():
    def __init__(self, client, auth):
        self.client = client
        self.auth = auth

    def get_project_badge(self, project):
        self.client.get(config.URL_GET_PROJECT_BADGES.format(project=project),
        verify=False, auth=self.auth)

    def get_coverage(self, project):
        self.client.get(config.URL_GET_COVERAGE.format(project=project),
        verify=False, auth=self.auth)