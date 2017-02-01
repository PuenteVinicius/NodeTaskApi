import https from "https";//importando os módulos https
import fs from "fs"; // importanto o modulo fs
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
