# test-autopublish-alias-layer

This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI.

## Deploy the sample application

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications.
To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js > 12](https://nodejs.org/en/), including the NPM package management tool.

**Before deploying make sure to create a bucket for sam repository and replace it in samconfig.toml `s3_bucket=XXXX` **


To build and deploy your application for the first time, run the following in your shell:

```bash
npm run push
```

Then with rest client call the endpoint
```bash
curl https://<Api>//live/hello/
```

The result will be 
```json
{
    "message": "hello world  with version V0"
}
```

Now lets update the dependency layer (utils.js) without touching the lambda by returning `v1` and deploy once again

The result will still be 
```json
{
    "message": "hello world  with version V0"
}
```
instead of
```json
{
    "message": "hello world  with version V1"
}
```

The only way to get the right result is to make one change in the lanbda code
