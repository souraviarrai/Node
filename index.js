const fs = require('fs');
const http = require('http');

////////////file///////////////////

// const apple = fs.readFileSync('/Users/souravrai/Desktop/Projects/U|Node/apple.txt', 'utf-8');
// const myString = `This is what we know about apple: ${apple}.\n Created on ${Date.now()}`;
// fs.writeFileSync('/Users/souravrai/Desktop/Projects/U|Node/appleout.txt', myString);
// console.log('The file has been written sucessfully')

// asynchronous file reading 


// fs.readFile('/Users/souravrai/Desktop/Projects/U|Node/apple.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`/Users/souravrai/Desktop/Projects/U|Node/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);

//     });
// });

// console.log('This is first');


/////////////////server////////////////

const server = http.createServer((req, res) => {
    res.end('Hello from the server');

});

server.listen(8000, '127.0.0.1', () => {
    console.log('The server is running')
});