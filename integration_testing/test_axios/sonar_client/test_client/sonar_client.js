const CommonClient = require('./common_client')
const Constants = require('../constants')

class SonarClient extends CommonClient {
    constructor(baseUrl=Constants.baseUrl, auth=Constants.token) {
        super(baseUrl, auth)
        new CommonClient(this.baseUrl=baseUrl, this.auth=auth)
    }

    async get_metric_badge(project) {
        const url = Constants.PROJECT_BADGE_MEASURE_ENDPOINT
        return await this.session.get(url, {params: {project: project, metric: 'coverage'}})
    }

    async get_coverage(project) {
        const url = Constants.PROJECT_METRICS_ENDPOINT
        return await this.session.get(url, {params: {component: project, metrics: 'coverage'}})
    }
}

module.exports = SonarClient
