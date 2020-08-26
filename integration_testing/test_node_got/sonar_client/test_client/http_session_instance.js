const got = require('got')

let session = function createSession(baseUrl, auth) {
    return got.extend({
        prefixUrl: baseUrl,
        headers: {
            Authorization: 'Bearer ' + auth
        },
        responseType: 'json'
    })
}

module.exports = session