const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {


    if(req.url=="/"){
        fs.readFile("../Pages/Home.html","utf-8",(err,data)=>{
            if(err) throw err
            console.log(data);
            res.writeHead(200,{ "content-type": "text/html" })
            res.end(data)
        })
    }
    else if(req.url=="/movie"){
    const filePath = "./movie.mkv"
    var readStream = fs.createReadStream(filePath)
    res.writeHead(200, { "content-type": "video/mp4", "Content-Length": "chunkSize" })
    readStream.pipe(res)

    readStream.on("data", c => console.log("movie share", c.length))

    readStream.on("error",(err) => console.log("Movie not shared", err.message))
    }
   

    else{
         res.writeHead(200,{ "content-type": "text/html" })
            res.end("<h1>Page  not  found</h1>")
    }

})

server.listen(5000, () => console.log("server is running http://localhost:5000"))