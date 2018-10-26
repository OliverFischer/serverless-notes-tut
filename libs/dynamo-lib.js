/**
 * Author : oliverfischer
 * Created : 26.10.18
 * Purpose : Common functions to interact with an Amazon Dynamo Database.
 */

import AWS from "aws-sdk"

AWS.config.update({region : "eu-central-1"})

export function call(action, params){

    const dynamoDb = new AWS.DynamoDB.DocumentClient()

    /**
     * we invoke an action on the dynamoDb by accessing a function
     * in the dynamoDb object and calling it with params.
     * e.g.:
     * action <- put
     * params <- object
     *
     * can also be rewritten as dynamoDb.put(object)
     * return value is a <b>dynamoDb provided </b>promise to be resolved from the caller
     */
    return dynamoDb[action](params).promise()
}