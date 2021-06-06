// Error handler for possible error codes from the API
const errorHandler = (statusCode) => {
  switch(statusCode){
    case 400 : 
      return '400 Bad Request';
    case 404 : 
      return '404 Not Found';    
    case 500 : 
      return '500 Internal Server Error';   
    case 503 : 
      return '503 Service Unavailable';  
    default:
      return 'Something went wrong';
   }
}

export default errorHandler;