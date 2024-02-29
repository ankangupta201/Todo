module.exports.lambda = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: process.env.database_url,
        }
      ),
    };

  } catch (error) {
    return error

  }
};
