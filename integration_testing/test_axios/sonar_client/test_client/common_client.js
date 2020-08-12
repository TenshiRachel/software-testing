const sessionInstance = require('./session_instance')

class CommonClient {
    constructor(baseUrl, auth) {
        this.baseUrl = baseUrl
        this.auth = auth
        this.session = sessionInstance.createSession(this.baseUrl, this.auth)
    }
}

module.exports = CommonClient
