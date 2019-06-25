import "@babel/polyfill";
import express from "express";
import next from "next";
import bodyParser from "body-parser";
import formModel from "./database/models/form-model";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

import mongoConnector from "./database/connector";
import logger from "./logger";

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.get("/", (req, res) => app.render(req, res, "/index"));
  server.get("/index", (req, res) => app.render(req, res, "/index"));
  server.get("/about", (req, res) => app.render(req, res, "/about"));
  server.get("/form", (req, res) => app.render(req, res, "/form"));
  server.get("/form2", (req, res) => app.render(req, res, "/form2"));

  //salvando dados do front end no banco de dados via node
  server.post("/api/form", (req, res, next) => {
    const data = {
      name: req.body.name,
      genre: req.body.genre,
      age: req.body.age,
      checked: req.body.checked,
      radio: req.body.radio,
      select: req.body.select,
      boxItem: req.body.boxItem
    };

    formModel
      .createForm({ data })
      .then(data => {
        //console.log("entoru aqui no then");
        if (data === true) {
          res.status(200).send("Salvou com sucesso!");
        }
      })
      .catch(e => {
       // console.log("entoru aqui catch", data);
        res.status(403).send(e);
      });
  });

  server.get("/api/form", (req, res, next) => {
    formModel
      .search()
      .then(alldados => {
        //console.log("Entrou no then",alldados);
        res.status(200).send(alldados);
      })
      .catch(e => {
       // console.log("erro aqui catch");
        res.status(403).send(e);
      });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  //oq eu rfiz_________________________________

  server.listen(port, async err => {
    if (err) throw err;
    console.log(`> Custom Express Server ready on http://localhost:${port}`);

    const { connection } = await mongoConnector;
    connection.readyState
      ? logger.info("MongoDB was successfully connected")
      : logger.error("Error connecting to MongoDB");
  });
});
