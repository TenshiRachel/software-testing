const needle = require('needle')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = auth
    }

    async getProjectBranches(project, callback) {
        const url = this.baseUrl + constants.PROJECT_BRANCHES_ENDPOINT
        const options = {
            responseType: 'json',
            headers: {
                Authorization: 'Bearer ' + this.auth
            }
        }
        const params = {
            project: project
        }

        needle.request('get', url, params, options, (err, res) => {
            return callback(res.statusCode, res.body)
        })
    }

    getBranchCoverage(project, branch, analysisDate, callback) {
        const url = this.baseUrl + constants.BRANCH_COVERAGE_ENDPOINT
        const options = {
            responseType : 'json',
            headers: {
                Authorization: 'Bearer ' + this.auth
            }
        }
        const params = {
            component: project,
            branch: branch,
            from: analysisDate,
            to: analysisDate,
            metrics: 'coverage'
        }

        needle.request('get', url, params, options, (err, res) => {
            return callback(res.statusCode, res.body)
        })
    }
}

module.exports = SonarClient