/**
 * Author : oliverfischer
 * Created : 26.10.18
 * Purpose : Returns a note item by its id.
 */
import * as dynamoDbLib from "./libs/dynamo-lib"
import {success,failure} from "./libs/response-lib"

export async function main(event, context, callback){

    const params = {
        TableName: 'notes',
        // 'Key' defines the partition key and sort key of the item to be retrieved
        // - 'userId': Identity Pool identity id of the authenticated user
        // - 'noteId': path parameter
        Key: {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: event.pathParameters.id
        }
    }

    try{
        const result= await dynamoDbLib.call("get",params)
        if(result.Item){
            callback(null, success(result.Item))
        }else{
            callback(null, failure({status: false, error: 'Item not found'}))
        }
    }catch(e){
        console.error(e)
        callback(null, failure({status: false}))
    }
}