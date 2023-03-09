// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">My Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={"placeHolder"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">My Proficiencies</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>Node.js, SQL, MongoDB</li>
            <li>Express.js</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
