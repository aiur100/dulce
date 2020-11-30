const HTML_HEADER =  {
    "Content-Type": "text/html",
    "Cache-Control": "max-age=1000"
};
const JSON_HEADER = {
    "Content-Type":"application/json"
}
function buildResponse(statusCode = 200, body, headers = null,jsonEncode = true, extras = {}) {
    return {
        statusCode,
        body: jsonEncode ? JSON.stringify(body) : body,
        headers: {...JSON_HEADER,...headers },
        ...extras
    }
}

function buildHtmlResponse(statusCode = 200, body, headers = null) {
    return {
        statusCode,
        body,
        headers: {...HTML_HEADER, ...headers }
    }
}

module.exports = { buildResponse, buildHtmlResponse };