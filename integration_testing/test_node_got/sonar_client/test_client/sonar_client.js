const session = require('./http_session_instance')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = auth
        this.session = session(this.baseUrl, this.auth)
    }

    async getProjectBranches(project) {
        const url = constants.PROJECT_BRANCHES_ENDPOINT
        return await this.session.get(url, {
            searchParams: {
                project: project
            }
        })
    }

    async getBranchCoverage(project, branch, analysisDate) {
        const url = constants.BRANCH_COVERAGE_ENDPOINT
        return await this.session.get(url, {
            searchParams: {
                component: project,
                branch: branch,
                from: analysisDate,
                to: analysisDate,
                metrics: 'coverage'
            }
        })
    }
}

module.exports = SonarClient