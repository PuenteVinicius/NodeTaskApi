import fs from "fs";//fs vem de file system,
import winston from "winston";/* o wintson é responsável por tratar os logs
do sistema referente as requisições*/
if (!fs.existsSync("logs")) {/* testa se não exsite a pasta chamada logs
  se existir não existir ele cria a pasta*/
    fs.mkdirSync("logs");
}
module.exports = new winston.Logger({ /* cria utilizando a linguagem de objeto
(json) um arquivo conento os logs mais recentes*/
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/app.log",
            maxsize: 1048576,
            maxFiles: 10,
            colorize: false
        })
    ]
});
