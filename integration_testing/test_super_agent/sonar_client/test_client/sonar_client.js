const superAgent = require('superagent')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = auth
    }
}

module.exports = SonarClient