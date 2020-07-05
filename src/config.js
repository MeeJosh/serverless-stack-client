export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51GzivlL9y4KbuagQELtzAx9hXMs5qKiBoTcfMGMIxY5VXPXLdViMHCRAYBPq2f0lUxG2WDfQMLb2PT2d9iNk9BKh00Jgxu71Qv",
    s3: {
      REGION: "us-east-2",
      BUCKET: "meejosh-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://yg2vmrma4d.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_nKEaFkE3I",
      APP_CLIENT_ID: "32bvu8905i9qodd19ltitblrsh",
      IDENTITY_POOL_ID: "us-east-2:a12205b4-324e-411e-a827-eeb84ce94372"
    }
  };