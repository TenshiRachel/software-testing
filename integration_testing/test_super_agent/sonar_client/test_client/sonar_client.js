const superAgent = require('superagent')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = {
            Authorization: 'Bearer ' + auth
        }
    }

    async getProjectBranches(project) {
        const url = this.baseUrl + constants.PROJECT_BRANCHES_ENDPOINT
        return await superAgent.get(url)
        .set(this.auth)
        .query({project: project})
    }

    async getBranchCoverage(project, branch, analysisDate) {
        const url = this.baseUrl + constants.BRANCH_COVERAGE_ENDPOINT
        return await superAgent.get(url)
        .set(this.auth)
        .query({
            component: project,
            branch: branch,
            from: analysisDate,
            to: analysisDate,
            metrics: 'coverage'
        })
    }
}

module.exports = SonarClient