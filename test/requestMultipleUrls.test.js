import requestMultipleUrls from './../src/requestMultipleUrls.js';
import { URLs } from './../src/utilities/constants';
import data  from './mockResponse';

describe('Test requestMultipleUrls function', () => {

  it("To be successfully called", () => {
    expect(requestMultipleUrls(URLs)).toBeInstanceOf(Object);
  });

  it("To match the data", () => {
    expect(requestMultipleUrls(URLs)).resolves.toEqual(data);
  });
})
