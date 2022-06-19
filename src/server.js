'use strict';

const { validateQuery, validateUrlQuery, validateAllPathMethod, validateGetMethod } = require('./middleware/validator');
const { logger } = require('./middleware/logger');
const { badRequestHandler, notFoundHandler } = require('./error-handlers/client-errors');
const { internalErrorHandler} = require('./error-handlers/server-errors');

const express = require('express');
const app = express();

app.use(logger);
app.get('/person', validateQuery);
app.get('/person/:name', validateQuery);
app.use(validateGetMethod);
app.use(badRequestHandler);
app.use('/', validateAllPathMethod);
app.use('*', notFoundHandler);
app.use(internalErrorHandler);

module.exports = {
  server: app,
  start: (PORT) => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};
