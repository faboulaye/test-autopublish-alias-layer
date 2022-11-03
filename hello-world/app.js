const {
    getVersion
  } = require("/opt/utils");

exports.lambdaHandler = async (event, context) => {
    console.log("Version", getVersion());
    return {
        'statusCode': 200,
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify({
            message: `hello world  with version ${getVersion()}`,
        })
    }
};
