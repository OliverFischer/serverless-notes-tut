/**
 * Author : oliverfischer
 * Created : 26.10.18
 * Purpose : Common functions for returning responses.
 */

/*private*/function buildResponse/*Object*/(statusCode/*Int*/,body/*Any*/){
    return {
        statusCode,
        headers : {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    }
}

/**
 * Simple success response with a stringified body
 * @param body
 * @return {{statusCode, headers, body}}
 */
export function success(body){
    return buildResponse(200,body)
}

/**
 * Simple failure response with a stringified body
 * @param body
 * @return {{statusCode, headers, body}}
 */
export function failure(body){
    return buildResponse(500,body)
}