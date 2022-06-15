'use strict';

/**
 * Description:  
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

 export function successfulResponseHandler (req, res, next) {
  res.status(200).send('OK');
}
