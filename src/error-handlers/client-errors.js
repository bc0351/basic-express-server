'use strict';

/**
 * Description:
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

/* The server cannot or will not process the request due to 
something that is perceived to be a client error (e.g., malformed 
request syntax, invalid request message framing, or deceptive 
request routing). */

export function badRequestHandler (req, res, next) {
  res.status(400).send('Bad Request');
}

/* Although the HTTP standard specifies "unauthorized", 
semantically this response means "unauthenticated". That 
is, the client must authenticate itself to get the 
requested response. */

export function unauthorizedHandler (req, res, next) {
  res.status(401).send('Unauthorized');
}

/* The client does not have access rights to the content; 
that is, it is unauthorized, so the server is refusing to 
give the requested resource. Unlike 401 Unauthorized, the 
client's identity is known to the server. */

export function forbiddenHandler (req, res, next) {
  res.status(403).send('Forbidden');
}

/* The server can not find the requested resource. In the 
browser, this means the URL is not recognized. */

export function notFoundHandler (req, res, next) {
  res.status(404).send('Not Found');
}
