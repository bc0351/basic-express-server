'use strict';
const { notFoundHandler } = require('../error-handlers/client-errors');
const { internalErrorHandler } = require('../error-handlers/server-errors');
const { successfulResponseHandler } = require('../successful-responses/success-responses');

function validateQuery(req, res, next) {
  let { name } = req.query;
  let path = req.originalUrl.split('/');
  let param = path[path.length - 1];
  console.log(path, param);
  if (name) {
    res.status(200).send(JSON.stringify({name}));
  } else if (!name && param !== 'person') {
    res.status(200).send(`Hello ${param}, from us personally`);
  } else if (!name && param === 'person') {
    internalErrorHandler(req,res,next);
    next();
  }
}

function validateGetMethod(req, res, next) {
  let { method } = req.method;
  if (method !== 'GET') {
    notFoundHandler(req, res, next);
    next();
  }
  successfulResponseHandler(req, res, next);
}

function validateAllPathMethod(req, res, next) {
  let path = req.originalUrl;
  console.log(path);
  if (path !== '/') {
    notFoundHandler(req, res, next);
    next();
  }
  res.status(200).send('OK');
}

module.exports = {
  validateQuery,
  validateGetMethod,
  validateAllPathMethod
}
