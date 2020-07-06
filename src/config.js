 const dev = {
    STRIPE_KEY: "pk_test_51GzivlL9y4KbuagQELtzAx9hXMs5qKiBoTcfMGMIxY5VXPXLdViMHCRAYBPq2f0lUxG2WDfQMLb2PT2d9iNk9BKh00Jgxu71Qv",
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-i1nd3kt2raua"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://api.meejosh.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_wH9NWE6Es",
      APP_CLIENT_ID: "6q757jq16fon3eae3b2m43f0f2",
      IDENTITY_POOL_ID: "us-east-2:e33deae0-5204-4c4e-be49-88126b549156"
    }
  };
  
const prod = {
    STRIPE_KEY: "pk_test_51GzivlL9y4KbuagQELtzAx9hXMs5qKiBoTcfMGMIxY5VXPXLdViMHCRAYBPq2f0lUxG2WDfQMLb2PT2d9iNk9BKh00Jgxu71Qv",
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-kceova8yq7uk"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://api.meejosh.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_IO5dMQsuj",
      APP_CLIENT_ID: "2et2c3637umqo6dujbq1eo3dch",
      IDENTITY_POOL_ID: "us-east-2:6e6e6d36-e42b-4d1e-9e7c-ec22d4d20698"
    }
  };
  
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};