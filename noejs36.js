const http = require('http');
const fs = require('fs');


// function rqlistner(req , res){
//     console.log("hello from node");
// }

const server = http.createServer((req, res) => {
    // console.log(req.method, req.url, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>form page node</title></head>');
        res.write('<body> <form action="/message" method = "POST"><input type="text" name = "message"><button type ="submit">send</button> </form></body>');

        res.write('</html>');
        return res.end();
    }

    if(url ===  '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
            console.log(chunk);
        });

        return req.on('end' , () =>{
            const parsedbody = Buffer.concat(body).toString();
            console.log(parsedbody);
            const message = parsedbody.split('=')[1];
            fs.writeFile('./message.txt', message,err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();

        });

        
        
    }


    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>node page</title></head>');
    res.write('<body><h1>hello from node</h1></body>');
    res.write('</html>');
    res.end();

});

//creating an event loop

server.listen(3000);