'use strict';
const { notFoundHandler, badRequestHandler } = require('../error-handlers/client-errors');
const { internalErrorHandler } = require('../error-handlers/server-errors');
const { successfulResponseHandler } = require('../successful-responses/success-responses');

function validateQuery(req, res, next) {
  let { name } = req.query;
  let path = req.originalUrl.split('/');
  let param = path[path.length - 1];
  console.log(path, param);
  if (name) res.status(200).send(JSON.stringify({name}));
  if (!name && param !== 'person') res.status(200).send(`Hello ${param}, from us personally`);
  if (!name && param === 'person') internalErrorHandler(req, res, next);
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
  if (path !== '/') {
    internalErrorHandler(req, res, next);
    next();
  }
  successfulResponseHandler(req, res, next);
}

module.exports = {
  validateQuery,
  validateGetMethod,
  validateAllPathMethod
}
