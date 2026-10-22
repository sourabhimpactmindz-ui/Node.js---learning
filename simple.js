// import http from 'http';

// const server = http.createServer((req,res) => {
//     res.writeHead(200, "Content-Type: text/plain");
//     res.end("server is running");
// });

// server.listen(3000, () => {
//     console.log("server is running on port 3000")
// })

// import https from 'https';
// import fs from 'fs';
// const options = {
//     key : fs.readFileSync('key-pem'),
//     cert : fs.readFileSync('cert-pem')
// }

// const server = https.createServer(options, (req,res) => {
//     res.writeHead(200, "Content-Type: Text/plain");
//     res.sendDate("Server is running");
// })

// server.listen(3000 , () => {
//     console.log("server is running")
// })


// ============================================================================================================================================================================

// Promise.all([Promise.resolve(4) , Promise.resolve(6)])

//     .then(values => console.log(values.reduce((a,b) => a + b ,0)))


// Promise.allSettled([Promise.reject('X') , Promise.resolve('Y')])

// .then((result => console.log(result[0].reason , result[1].value)))

// Promise.allSettled([Promise.resolve(1), Promise.reject('no'), Promise.resolve(3)])

// .then(results => console.log(results.length));

// Promise.allSettled([])

// Promise.allSettled([Promise.resolve(2),7,Promise.resolve(9)])

// .then((result) => {console.log(result)})