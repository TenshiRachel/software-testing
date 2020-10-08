const needle = require('needle')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = auth
    }

    async getProjectBranches(project) {
        const url = this.baseUrl + constants.PROJECT_BRANCHES_ENDPOINT
        const params = {
            project: project
        }
        
        return (await needle.request('get', url, params)).body
    }

    async getBranchCoverage(project, branch, analysisDate) {
        const url = this.baseUrl + constants.BRANCH_COVERAGE_ENDPOINT
        const params = {
            component: project,
            branch: branch,
            from: analysisDate,
            to: analysisDate,
            metrics: 'coverage'
        }

        return (await needle.request('get', url, params)).body
    }
}

module.exports = SonarClient