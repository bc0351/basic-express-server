'use strict';

/**
 * Description:  
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

/* The server has encountered a situation it does not know 
how to handle. */

export function internalErrorHandler(req, res, next) {
  res.status(500).send('Internal Server Error');
}

/* This error response means that the server, while 
working as a gateway to get a response needed to handle 
the request, got an invalid response. */

export function badGatewayHandler(req, res, next) {
  res.status(502).send('Bad Gateway');
}

/* The server is not ready to handle the request. Common
causes are a server that is down for maintenance or that
is overloaded. Note that together with this response, a
user-friendly page explaining the problem should be sent. */

export function unavailableHandler(req, res, next) {
  res.status(503).send('Service Unavailable');
}

/* This error response is given when the server is acting
as a gateway and cannot get a response in time. */

export function gatewayTimeoutHandler(req, res, next) {
  res.status(504).send('Gateway Timeout');
}

/* Indicates that the client needs to authenticate to gain
network access. */

export function networkAuthHandler(req, res, next) {
  res.status(511).send('Network Authentication Required');
}
