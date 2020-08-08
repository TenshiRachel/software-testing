GLOBAL_COUNTER = 0

USER_CREDENTIALS = [
    ('', '')
]

PROJECT = 'software-test'

URL_GET_PROJECT_BADGES = 'api/project_badges/measure?project={project}&metric=coverage'
URL_GET_COVERAGE = 'api/measures/search_history?component={project}&metrics=coverage'

def get_next(items=USER_CREDENTIALS):
    global GLOBAL_COUNTER
    size = len(items)
    res = items[GLOBAL_COUNTER % size]
    GLOBAL_COUNTER += 1
    return res