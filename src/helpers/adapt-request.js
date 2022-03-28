module.exports = function adaptRequest(httpRequest = {}) {
    return Object.freeze({
        path: httpRequest.path,
        method: httpRequest.method,
        params: httpRequest.params,
        query: httpRequest.query,
        body: httpRequest.body
    })
}