const url = require('url');

const { URL } = url;
const myURL = new URL('https://hmsun-es:abcd1234@github.com:8443/hyunmui?tab=repositories#element_id');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------');
const parsedUrl = url.parse('https://hmsun-es:abcd1234@github.com:8443/hyunmui?tab=repositories#element_id');
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));