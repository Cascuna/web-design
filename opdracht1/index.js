const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

const slideShowItems = [
  {
    name: "Zach afron",
    title: "Firewatch/Rick and Morty Wallpaper",
    image: "./img/hero2.jpg"
  },
  {
    name: "Succ-er Burgh",
    title: "Making moneys",
    image: "./static/img/hero2.jpg"
  }
];

nunjucks.configure("templates", { autoescape: true, express: app });

app
  .set("view engine", "html")
  .use(express.static("static"))
  .get("/", homePage)
  .listen("3000", initApplication);

function homePage(request, response) {
  response.render("index", { slideShowItems: slideShowItems });
}

function initApplication() {
  console.log("App is online on http://127.0.0.1:3000");
}
