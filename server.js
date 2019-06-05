const http = require('http')
const port = 9000
const url = require('url')
const myUrl = url.parse("https://sss.udemy.com/spring-boot-tutorial-for-beginners/learn/v4/t/lecture/7675492?start=0")


function responseHandler (request, response) {
   
    response.writeHead(200, {'Content-Type':'text/plain'})
    //response.write('okay')
    response.write(myUrl.pathname)
    //response.write('<h1>Hello World</h1>')
    response.end()
}

const server = http.createServer(responseHandler)


server.listen(port)