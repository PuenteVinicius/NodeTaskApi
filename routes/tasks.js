module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
        .get((req, res) => {
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
            // "/tasks": Lista tarefas
        })
        .post((req, res) => {
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
            // "/tasks": Cadastra uma nova tarefa
        });
    app.route("/tasks/:id")
        .all((req, res) => {
            delete req.body.id;
            next();
            // Middleware de pré-execução das rotas
        })
        .get((req, res) => {
            Tasks.findOne({
                    where: req.params
                })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .put((req, res) => {
            Tasks.update(req.body, {
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                }); // "/tasks/1": Atualiza uma tarefa
        })
        .delete((req, res) => {
            Tasks.destroy({
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
            // "/tasks/1": Exclui uma tarefa
        });
};
