import config
from locust import HttpUser, task, between
from sonar_client import SonarqubeClient


class User(HttpUser):
    wait_time = between(5, 9)

    # scenario 1 will have 3 times the chance of running
    # than scenario 2
    @task(3)
    def scenario_01(self):
        auth = config.get_next()
        sq = SonarqubeClient(self.client, auth)
        project_name = config.PROJECT
        sq.get_project_badge(project_name)
        sq.get_coverage(project_name)

    @task(1)
    def scenario_02(self):
        auth = config.get_next()
        sq = SonarqubeClient(self.client, auth)
        project_name = config.PROJECT
        sq.get_coverage(project_name)
        sq.get_project_badge(project_name)
