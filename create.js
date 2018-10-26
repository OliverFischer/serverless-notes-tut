/**
 * Author : oliverfischer
 * Created : 26.10.18
 * Purpose : Creates a new item in our notes database
 */
import uuid from "uuid"
import * as dynamoDbLib from "./libs/dynamo-lib"
import {success, failure} from "./libs/response-lib"

export async function main(event, context, callback){

    const data = JSON.parse(event.body)

    const params = {
        TableName : "notes",
        Item : {
            userId: event.requestContext.identity.cognitoIdentityId,
            noteId: uuid.v1(),
            content: data.content,
            attachement: data.attachment,
            createdAt: Date.now()
        }
    }

    try{
        await dynamoDbLib.call("put",params)
        callback(null,success(params.Item))
    }catch(e){
        console.log(e) // OLLI : Remove after catching up all pitfalls
        callback(null, failure({status: false}))
    }

}