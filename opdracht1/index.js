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

const artworks = [
  {
    name: "Alex van der wal",
    title: "Mijn inspiratie bron",
    image: "./img/hero2.jpg",
    description:
      "Dit is een verhaal over mijn inspiratie om deze website te maken, met expres wat meer content om te zien hoe het systeem hierop reageert :)",
    genre: "n.v.t",
    dateAdded: "1-1-2018"
  },
  {
    name: "Alex van der wal",
    title: "Mijn inspiratie bron",
    image: "./img/hero.jpg",
    description:
      "Dit is een verhaal over mijn inspiratie om deze website te maken, met expres wat meer content om te zien hoe het systeem hierop reageert :), blijkbaar is dit nog niet genoeg maar dat maakt niet uit ik kan typen yoh jeetje dat is niet niets deze vingers gaan MINIMAAL 180k/m per uur hou me tegen dan ",
    genre: "n.v.t",
    dateAdded: "1-1-2018"
  }
];

nunjucks.configure("templates", { autoescape: true, express: app });

app
  .set("view engine", "html")
  .use(express.static("static"))
  .get("/:artworkId", artworkDetailPage)
  .get("/", homePage)
  .listen("3000", initApplication);

function homePage(request, response) {
  response.render("index", {
    slideShowItems: slideShowItems,
    artworks: artworks
  });
}

function artworkDetailPage(request, response) {
  console.log(request.params);
  let artwork = request.params["artworkId"];
  console.log(artworks[artwork]);
  response.render("detail-view", {
    artwork: artworks[request.params["artworkId"]],
    artworks: artworks
  });
}

function initApplication() {
  console.log("App is online on http://127.0.0.1:3000");
}
