//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Project 1",
    languages: "react, jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/pocket-traders.png",
    description: "Allows you to trade pokemon and create a team. I did the design and front end!",
    repo: "https://github.com/dbottoni/PokeTrader",
    live: "https://pocket-traders.herokuapp.com/",
  },
  {
    id: 1,
    title: "Project 2",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/techtopics.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/EmilyNecciai/tech-topics",
    live: "https://floating-thicket-72381.herokuapp.com/",
  },
  {
    id: 2,
    title: "Project 3",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, puppeteer, sequelize",
    image: "/img/quizam.png",
    description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
    live: "https://quizam.herokuapp.com/",
    repo: "https://github.com/EmilyNecciai/quizam",
  },
  {
    id: 3,
    title: "Project 4",
    languages: "html, css, js",
    image: "/img/noheadphones.png",
    packages: "none",
    description: "Gives you a recommendation for media that will entertain you during your commute.",
    repo: "https://github.com/EmilyNecciai/no-headphones",
    live: "https://emilynecciai.github.io/no-headphones/",
  },
  {
    id: 4,
    title: "Project 5",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/duly-noted.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/EmilyNecciai/duly-noted",
    live: "https://obscure-hollows-28379.herokuapp.com/",
  },
  {
    id: 5,
    title: "Project 6",
    languages: "html, css",
    packages: "none",
    image: "/img/work-portfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  }
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">My Portfolio</p>
      <hr />
      <Project projects={projects} />
      <hr/>
    </div>
  );
}

export default Portfolio;
