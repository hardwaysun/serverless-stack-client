export default {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://i06ptxz5r6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PUQeKVf6S",
    APP_CLIENT_ID: "7b5ck15qd4uu630ai85f1k94dt",
    IDENTITY_POOL_ID: "us-east-2:b1d1257b-518f-452c-8568-35d85bacfbf5"
  }
};
