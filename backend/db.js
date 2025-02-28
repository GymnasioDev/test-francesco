const {DynamoDBClient} = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient({
    region: 'eu-south-1',
    endpoint: 'http://0.0.0.0:8000',
    credentials: {
      accessKeyId: 'test',
      secretAccessKey: 'test_key'
    },
  })

module.exports = client;