import express from "express"; //importa o modulo express
import consign from "consign"; // importa o modeulo consign
const app = express(); // declara uma variável do tipo app
consign({verbose: false}) // carrega os arquivos de forma simples.
    .include("libs/config.js")
    .then("db.js")
    .then("auth.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);
module.exports = app;
