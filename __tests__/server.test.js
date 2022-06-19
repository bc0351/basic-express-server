'use strict';

// 404 on a bad route
// 404 on a bad method
// 500 if no name in the query string
// 200 if the name is in the query string
// given an name in the query string, the output object is correct

const {server} = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Server Tests', () => {
  describe('Error Handler Tests', () => {
    test('404: Bad Route', async () => {
      let response = await mockRequest.get('/foo');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });
    test('404: Bad Method', async () => {
      let response = await mockRequest.put('/person');
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });
    test('500: Missing Name in Query String', async () => {
      let response = await mockRequest.get('/person');
      expect(response.status).toEqual(500);
      expect(response.text).toEqual('Internal Server Error');
    });
  });
  describe('Successful Response Tests', () => {
    test('/person route works with name in query parameter', async () => {
      let response = await mockRequest.get('/person?name=John');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual(`{"name":"John"}`);
    });
    test('/person route works with URL/path parameter', async () => {
      let response = await mockRequest.get('/person/John');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Hello John, from us personally');
    });
  });
});
