//importing the dependency
var http = require('http')
//configure server to respond to all request with string
var server=http.createServer(function(req,res){
    res.end('hello world');
})
//starting the server
server.listen(3000,function(){
    console.log('the server is up and running now')
})




console.log('hello world');


var resp='hello welcome to primo nodejs academy'.split(' ').map((word,index) =>
{ return word.charAt(0).toLowerCase()+word.slice(1).toUpperCase()
});
console.log(resp.join(' '))