import errorHandler from './../src/utilities/errorHandler.js';

describe('Validate Error Handler', () => {

  it("should throw error code 400 in case of bad request", () => {
    expect(errorHandler(400)).toBe('400 Bad Request');
  });

  test('should throw error code 404 in case of URL Not Found', () => {
    expect(errorHandler(404)).toBe('404 Not Found');
  })

  test("should throw error code 500 in case of Internal Server Error", () => {
    expect(errorHandler(500)).toBe('500 Internal Server Error');
  });

  test("should throw error code 503 in case of Service Unavailable", () => {
    expect(errorHandler(503)).toBe('503 Service Unavailable');
  });
  })
