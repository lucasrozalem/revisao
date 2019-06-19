import "@babel/polyfill";
import express from "express";
import next from "next";
import bodyParser from 'body-parser';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

import mongoConnector from './database/connector';
import logger from './logger';

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true}));
  server.use(bodyParser.json())

  server.get('/', (req, res) => app.render(req, res, '/index'));
  server.get('/index', (req, res) => app.render(req, res, '/index'));
  server.get('/about', (req, res) => app.render(req, res, '/about'));
  server.get('/form', (req, res) => app.render(req, res, '/form'));
  server.get('/form2', (req, res) => app.render(req, res, '/form2'));
  
  server.post('/api/form', (req, res, next) => {
    
    let name1 = req.body.name
    let genre1 = req.body.genre
    let age1 = req.body.age
    let checked1 = req.body.checked
    let radio1 = req.body.radio
    let select1 = req.body.select
    let boxItem1 = req.body.boxItem
    
    console.log(name1)
    console.log(genre1)
    console.log(age1)
    console.log(checked1)
    console.log(radio1)
    console.log(select1)
    console.log(boxItem1)
    res.send('Ok')
  })

    server.get('/api/form', (req, res, next) => {
      res.send(console.log(res)
      )})
  

  server.get("*", (req, res) => {
    return handle(req, res);
  });

//oq eu rfiz_________________________________
  

  server.listen(port, async (err) => {
    if (err) throw err;
    console.log(`> Custom Express Server ready on http://localhost:${port}`);

    const { connection } = await mongoConnector;
    connection.readyState
      ? logger.info('MongoDB was successfully connected')
      : logger.error('Error connecting to MongoDB');
  });
});