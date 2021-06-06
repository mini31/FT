import axios from 'axios'; 

import errorHandler from './utilities/errorHandler.js'

import { allowedHTTPCodes, errorHTTPCodes} from './utilities/constants.js';

// axios call to the APIs
const fetchData = url => axios.get(url)
  .then(response => {
    return response;
  })
  .catch(error => {
    return error;
  });

// Map to iterate through the API URLs
const mapURLsToFetch = (URLs) => URLs.map(url => fetchData(url));

// To retrieve the status code
const getStatusCode = (response) => response && response.status ? response.status : (response.response && response.response.status) ? response.response.status : 404;

// Error Handling
const errorValidator = (reject, responses) => {
  let aggregatedArray = responses.map((response) => {
    let statusCode = getStatusCode(response);
    if (!allowedHTTPCodes.includes(statusCode) || errorHTTPCodes.includes(statusCode)) {
      reject(errorHandler(statusCode));
    }
    return response;
  })
  return aggregatedArray;
}

// Function to request data
async function requestMultipleUrls(URLs) {
  const aggregatedResponse = mapURLsToFetch(URLs);

  return await Promise.all(aggregatedResponse)
    .then((responses) => {
      return new Promise((resolve, reject) => {
        resolve(errorValidator(reject, responses));
      })
    })
    .catch(error => console.log(error));
}


export default requestMultipleUrls;

