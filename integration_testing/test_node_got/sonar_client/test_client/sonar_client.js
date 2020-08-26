const session = require('./http_session_instance')
const constants = require('../constants')

class SonarClient {
    constructor(baseUrl=constants.baseUrl, auth=constants.auth) {
        this.baseUrl = baseUrl
        this.auth = auth
        this.session = session(this.baseUrl, this.auth)
    }
}

module.exports = SonarClient