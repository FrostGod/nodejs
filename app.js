const http = require('http');

// function rqlistner(req , res){
//     console.log("hello from node");
// }

const server = http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers);
    // process.exit();
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>node page</title></head>');
    res.write('<body><h1>hello from node</h1></body>');
    res.write('</html>');
    res.end();

});

//creating an event loop

server.listen(3000);