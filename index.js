import requestMultipleUrls from './src/requestMultipleUrls.js';
import { URLs } from './src/utilities/constants.js';

requestMultipleUrls(URLs).then((response) => console.log(response));