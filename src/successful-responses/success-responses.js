'use strict';

/**
 * Description:  
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

function successfulResponseHandler(req, res) {
  res.status(200).send('OK');
}

module.exports = {
  successfulResponseHandler
}
