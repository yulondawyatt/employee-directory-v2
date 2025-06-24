import express from "express";
const app = express();
export default app;



app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

import employeesRouter from './employeesRoutes.js';
app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  console.err(err.stack);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    message: err.message || 'Houston, we have problem!'
  });
});
