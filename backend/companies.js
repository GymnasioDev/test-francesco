const db = require("./db");
const uuid = require("uuid");
const {
    GetItemCommand,
    PutItemCommand,
    DeleteItemCommand,
    ScanCommand,
    UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const getCompany = async (event) => {
    const response = { statusCode: 200 };

    try {
        const params = {
            TableName: process.env.DYNAMODB_COMPANIES_TABLE,
            Key: marshall({ id: event.pathParameters.company }),
        };
        let Item  = unmarshall((await db.send(new GetItemCommand(params))).Item);
       

      
        response.body = JSON.stringify({
            message: "Successfully retrieved post.",
            data: (Item) ? Item : {},
            rawData: Item,
        });
    } catch (e) {
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify({
            message: "Failed to get post.",
            errorMsg: e.message,
            errorStack: e.stack,
        });
    }

    return response;
};

const createCompany = async (event) => {
    const response = { statusCode: 200 };

    try {
        const body = JSON.parse(event.body);

        body.id = uuid.v4();
  
        body.creationDate = new Date().toISOString();
        body.tasks = [];

        const params = {
            TableName: process.env.DYNAMODB_COMPANIES_TABLE,
            Item: marshall(body || {}),
        };
        const createResult = await db.send(new PutItemCommand(params));

        response.body = JSON.stringify({
            message: "Successfully created post.",
            createResult,
        });
    } catch (e) {
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify({
            message: "Failed to create post.",
            errorMsg: e.message,
            errorStack: e.stack,
        });
    }

    return response;
};



const deleteCompany = async (event) => {
    const response = { statusCode: 200 };

    try {
        const params = {
            TableName: process.env.DYNAMODB_COMPANIES_TABLE,
            Key: marshall({ postId: event.pathParameters.postId }),
        };
        const deleteResult = await db.send(new DeleteItemCommand(params));

        response.body = JSON.stringify({
            message: "Successfully deleted post.",
            deleteResult,
        });
    } catch (e) {
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify({
            message: "Failed to delete post.",
            errorMsg: e.message,
            errorStack: e.stack,
        });
    }

    return response;
};

const getAllCompanies = async () => {
    const response = { statusCode: 200 };

    try {

        
        const { Items } = await db.send(new ScanCommand({ TableName: process.env.DYNAMODB_COMPANIES_TABLE }));

        

        

        response.body = JSON.stringify({
            message: "Successfully retrieved all posts.",
            data: Items.map((item) => unmarshall(item)),
            Items,
        });
    } catch (e) {
        console.error(e);
        response.statusCode = 500;
        response.body = JSON.stringify({
            message: "Failed to retrieve posts.",
            errorMsg: e.message,
            errorStack: e.stack,
        });
    }

    return response;
};

module.exports = {
    getCompany,
    createCompany,
    deleteCompany,
    getAllCompanies,
};