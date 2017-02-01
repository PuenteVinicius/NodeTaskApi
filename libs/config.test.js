
module.exports = {
  database: "ntask_test",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    logging: false,
    sync: {
      force: true
    },
    define: {
      underscored: true
    }
  },
  jwtSecret: "NTASK_TEST",
  /* jwtSecret mantém uma string de chave secreta que servirá
  como base para encode/decode de tokens.*/
  jwtSession: {session: false}
};
