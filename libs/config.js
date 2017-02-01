/*
  Testa estamos rodando a aplicação ou se estamos testandom através da
  variável de abiente do NODE.

*/
module.exports = app => {
    const env = process.env.NODE_ENV;
    if (env) {
        return require(`./config.${env}.js`);
    }
    return require("./config.development.js");
};
