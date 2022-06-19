'use strict';

const { validateQuery, validateAllPathMethod} = require('./middleware/validator');
const { logger } = require('./middleware/logger');

const express = require('express');
const app = express();

app.use(logger);
app.get('/person', validateQuery);
app.get('/person/:name', validateQuery);
app.use('/', validateAllPathMethod);
app.use('*', validateAllPathMethod);

module.exports = {
  server: app,
  start: (PORT) => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};
