const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
    mongoose
        .connect(
            "mongodb+srv://khanradebojyoti_db_user:wqZqZe1CPopkvi1s@cluster0.ddzzplb.mongodb.net/day-6",
        )
        .then(() => {
            console.log("Connected to DB");
        });
}

connectToDb();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
