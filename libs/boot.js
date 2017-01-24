module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get("port"), () => {
      console.log(`NTask API - porta ${app.get("port")}`);
    });
  });
}
