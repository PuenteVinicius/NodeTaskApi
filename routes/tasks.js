module.exports = app => {
  app.get("/tasks", (req, res) => {
    res.json({
      tasks: [{
          title: "Fazer compras"
        },
        {
          title: "Consertar o pc"
        },
      ]
    });
  });
};
