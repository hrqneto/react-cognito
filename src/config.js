export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-antonio"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yg0apqqbw5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_qJQnVWTYu",
    APP_CLIENT_ID: "6gl0mo9aa9u56rutb5ggh0rk87",
    IDENTITY_POOL_ID: "us-east-1:f4ca3dc6-f075-4cd6-b917-846ea653fcc0"
  }
};
