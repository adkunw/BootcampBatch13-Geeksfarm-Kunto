const http = require("http");
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);

    res.writeHead(200, { "Content-Type": "text/html" });
    if (url === "/about") {
      renderHTML("./about.html", res);
    } else if (url === "/contact") {
      renderHTML("./contact.html", res);
    } else {
      renderHTML("./index.html", res);
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
