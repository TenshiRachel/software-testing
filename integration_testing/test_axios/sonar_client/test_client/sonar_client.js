const CommonClient = require('./common_client')
const Constants = require('../constants')

class SonarClient extends CommonClient {
    constructor(baseUrl=Constants.baseUrl, auth=Constants.token) {
        super(baseUrl, auth)
        new CommonClient(this.baseUrl=baseUrl, this.auth=auth)
    }
}

module.exports = SonarClient
