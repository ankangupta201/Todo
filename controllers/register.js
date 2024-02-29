const user = require("../models/user")
const db = require("../models/dbConfig")
const bcrypt = require("bcrypt")

exports.lambda = async (event, context) => {
    try {
        console.log(event.body);
        await db()

        const { firstName,
            lastName,
            email,
            password
        } = JSON.parse(event.body)
        console.log(firstName,
            lastName,
            email,
            password);

        var newData = new user({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: await bcrypt.hash(password, 10)
        });
        console.log("newData", newData);

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
        console.log("error",error);
        return error.message

    }
};
