const blog = require("../models/todo")
const db = require("../models/dbConfig")

exports.lambda = async (event, context) => {
    try {
        // console.log(event.body);
        await db()

        const { data } = JSON.parse(event.body)
        // console.log(data);
        var newData = new blog({ title: data });
        // console.log("newData", newData);

        const result = await newData.save()
        // console.log("result", result);
        // console.log(process.env.database_url);


        return {
            statusCode: 200,
            body: JSON.stringify(
                result
            ),
        };

    } catch (error) {
        return error

    }
};
