'use strict';

const express = require('express');
import * as ClientError from './error-handlers/client-errors';
import * as ServerError from './error-handlers/server-errors';
import * as Responses from './successful-responses/success-responses';
const app = express();


const PORT = process.env.PORT || 3002;

function logger(req, res, next) {
  console.log(`REQUEST: ${req.method}, ${req.originalUrl}`);
  next();
}

function validateQuery(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Please enter a name query parameter like this:  /hello?name=Ryan');
  } else {
    console.log('name:', name);
  }
  next();
}

app.use(logger);

app.get('/hello', validateQuery, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Personal Greetings ${name}`);
});

app.get('/hello/:name', (req, res, next) => {
  let { name } = req.params;
  res.status(200).send(`Hello ${name}, from us personally`);
});


app.get('/error-using-next', (req, res, next) => {
  next('Whoops, something ELSE went wrong!');
});

app.use('*', ClientError.notFoundHandler);

app.use(ServerError.internalErrorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};
