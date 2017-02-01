/*Seta as configurações básica da aplicação, como por exemplo
  nome do banco, tipo de atuenticação e etc.
*/
import logger from "./logger.js"; //importa a função loger do arquivo logger.js
module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true //preenche espaços em branco com o caracter"_"

        }
    },
    jwtSecret: "Nta$K-AP1",
     /* jwtSecret mantém uma string de chave secreta que servirá
     como base para encode/decode de tokens.*/
    jwtSession: {
        session: false
    }
};
