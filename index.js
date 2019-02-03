const http = require('http');
const server = http.createServer();


server.on('request', (req, res)=> {
    console.log(process.env);
    res.end('Test');
});


server.listen(3000, ()=>{
    console.log('Start Server');
});