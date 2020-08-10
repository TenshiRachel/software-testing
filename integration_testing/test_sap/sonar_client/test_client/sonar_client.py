import logging
from .http_client_base import CommonClient


class SonarClient(CommonClient):
    def __init__(self,
                 base_url='http://localhost:9000/',
                 auth=('', ''),
                 polling_threads=5,
                 polling_sleep=0.5,
                 polling_long_sleep=30,
                 polling_max_attempts=400,
                 logging_level=logging.WARNING):
        """
        Creates a new instance of a client object to access Sonarqube
        """
        logger = logging.getLogger('SonarqubeApiClient')
        logger.setLevel(logging_level)
        CommonClient.__init__(self,
                              base_url=base_url,
                              polling_threads=polling_threads,
                              polling_sleep=polling_sleep,
                              polling_long_sleep=polling_long_sleep,
                              polling_max_attempts=polling_max_attempts,
                              logging_level=logging_level)
        self.logger = logger

    def get_project_coverage(project):
        res = self.session.get(self.base_url + 
        'api/measures/search_history?component={project}&metrics=coverage'.format(project=project),
        verify=False, auth=self.auth)
        return res
