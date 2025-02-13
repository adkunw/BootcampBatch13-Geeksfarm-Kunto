const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { nama: "Aditya Kunto", title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/contact", (req, res) => {
  cont = [
    { nama: "Aditya Kunto", email: "qwe@azxc.com" },
    { nama: "Budi", email: "budi@asd.com" },
    { nama: "Caca", email: "caca@qwe.com" },
  ];
  res.render("contact", { cont, title: "Contact Page" });
});

app.get("/product/:idProduct", (req, res) => {
  res.send(
    `Product Page ID : ${req.params.idProduct} <br> Category ID : ${req.query.idCategory}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404 Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
