const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('welcome to our homepage')
    return;//this wasnt in the tutorial but if you ddint add this the server stp listening after 1 input in browser
}

if(req.url==='/about'){
    res.end('here is our short history')
    return;//this wasnt in the tutorial but if you ddint add this the server stp listening after 1 input in browser
}
res.end('<h1>Oops!</h1><p>we cant seem to find the page you are looking for</p><a href="/">back home</a>')
})

server.listen(5000)