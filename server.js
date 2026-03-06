// const http = require("http")
// const fs = require("fs")
// const url = require("url")

// const server = http.createServer((req, res) => {

//     const parsedUrl = url.parse(req.url, true)
//     const pathname = parsedUrl.pathname

//     if (pathname === "/form" && req.method === "GET") {

//         const username = parsedUrl.query.name
//         console.log("Username:", username)   // ← should work now ?name=Rahul

//         res.writeHead(200, { "Content-Type": "text/html" })
//         res.end("<h1>Form Page</h1>")
//     }

//     else {
//         res.writeHead(404, { "Content-Type": "text/html" })
//         res.end("<h1>Not Found</h1>")
//     }

// })

// server.listen(5000, () =>
//     console.log("Server running at http://localhost:5000")
// )



const http = require("http")
const fs = require("fs")
const url = require("url")
const querystring = require("querystring")

const server = http.createServer((req, res) => {
    if (req.url == "/Home.html") {
        fs.readFile("./Pages/Home.html", "utf-8", (err, data) => {
            if (err) throw err
            res.writeHead(200, { "content-type": "text/html" }),
                res.end(data)
        })
    }
    else if (req.url == "/about.html") {
        fs.readFile("./Pages/About.html", "utf-8", (err, data) => {
            if (err) throw err
            res.writeHead(200, { "content-type": "text/html" }),
                res.end(data)
        })
    }
    else if (req.url == "/Form.html") {
        fs.readFile("./Pages/Form.html", "utf-8", (err, data) => {
            if (err) throw err
            res.writeHead(200, { "content-type": "text/html" }),
                res.end(data)
        })
    }


    else if (req.url.startsWith("/data") && req.method == 'GET') {
        var parsedURL = url.parse(req.url);
        var qurey = querystring.parse(parsedURL.query);
        const filePath = "data.csv";
        console.log(qurey);
        const name = qurey.name;
        const age = qurey.age;
        fs.appendFile("data.txt", `${name},${age}\n`, (err) => {
            if (err) throw err;
            console.log("TXT data added");
        });
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "Name,Age\n");
        }


        fs.appendFile("data.csv", `${name},${age}\n`, (err) => {
            if (err) throw err;
            console.log("TXT data added");
        });
        res.writeHead(200, { "content-type": "text/html" }),
            res.end(` <h2>Received Data</h2>
      Name: ${name} <br>
      Age: ${age}
      <br><br>
      <a href="/">Go Back</a>`)

    }

    else {
        res.writeHead(200, { "content-type": "text/html" }),
            res.end("page not found")
    }



})

server.listen(5000, () => console.log("server is running http://localhost:5000"))
