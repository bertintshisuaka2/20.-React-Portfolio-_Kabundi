//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "README Generator",
    languages: "Node.js, JavaScript",
    packages: "Inquirer",
    image: "portfolio-app/src/assets/images/READMEGenerator.png",
    description: "This application is able to generate a README file based on the user's input to basic questions",
    repo: "https://github.com/bertintshisuaka2/Node.js-Challenge-Professional-README-Generator",
    live: "N/A",
  },
  {
    id: 1,
    title: "Team Profile Generator",
    languages: "JavaScript, Node.js",
    packages: "Inquirer",
    image: "portfolio-app/src/assets/images/Team-Profile-Gen.png",
    description: "After answering the prompts about who they would like to add to a team, a team profile is then generated into a simple website",
    repo: "https://github.com/bertintshisuaka2/Team-profile-generator",
    live: "N/A",
  },
  {
    id: 2,
    title: "Employee Tracker",
    languages: "JavaScript, Node.js, SQL",
    packages: "Console.Table, Express, Inquirer, MySQL2",
    image: "portfolio-app/src/assets/images/EmployeeTracker.png",
    description: "This application allows a manager to keep track of their company. They can view employees, departments, roles, etc.",
    live: "N/A",
    repo: "https://github.com/bertintshisuaka2/SQL-Challenge-Employee-Tracker",
  },
  {
    id: 3,
    title: "Ecommerce Backend",
    languages: "JavaScript, SQL, Node.js",
    image: "portfolio-app/src/assets/images/Ecommerce-Backend.png",
    packages: "dotenv, Express, MySQL2, Sequelize",
    description: "Allows a user to look at the inventory of their ecommerce business.",
    repo: "https://github.com/bertintshisuaka2/13.-Object-Relational-Mapping-ORM-Challenge-E-commerce-Back-End",
    live: "N/A",
  },
  {
    id: 4,
    title: "Find My Scenic",
    languages: "HTML, CSS, JavaScript",
    packages: "N/A",
    image: "portfolio-app/src/assets/images/ScenicDrive.png",
    description: "From a pre-selected list of options, a user can search about a scpecific scenic route in different states.",
    repo: "https://github.com/bertintshisuaka2/group-proj-one",
    live: "https://git-vdim-hub.github.io/group-proj-one/",
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
