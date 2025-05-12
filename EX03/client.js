const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/',
    method: 'GET',
};


// 1: Use core library to call API
// const req = http.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on('data', d => {
//         process.stdout.write(d);
//     });
// });


// req.on('error', error => {
//     console.log(error);
// });

// req.end();

// 2: Use third-library (axios) to call API
const axios = require('axios');

axios.get('http://localhost:3000')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

