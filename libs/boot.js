import https from "https";
import fs from "fs";
module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        const credentials = {
            key: fs.readFileSync("nodetask.key", "utf8"),
            cert: fs.readFileSync("nodetask.cert", "utf8")
        }
        app.db.sequelize.sync().done(() => {
            https.createServer(credentials, app)
                .listen(app.get("port"), () => {
                    console.log(`NTask API - porta ${app.get("port")}`);
                });
        });
    }
};
