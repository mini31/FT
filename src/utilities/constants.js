// API URLs, in future, constants file can be a single place to change all the values
export const URLs = [
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
  'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

// Supported status code
export const allowedHTTPCodes = [200, 201];

// Unsupported status code
export const errorHTTPCodes = [400, 404, 500, 503];