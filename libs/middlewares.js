import bodyParser from "body-parser";
import express from "express";
module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
};
module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.use(cors({
      origin: ["http://localhost:3001"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"]
    }));
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static("public"));
};
