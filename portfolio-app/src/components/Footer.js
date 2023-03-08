//Links to the GitHub and LinkedIn

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <hr />
          <div className="githublogo">
            <a
              href="https://github.com/bertintshisuaka2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/githubLogo.png")}
                alt="Github"
                className="logo"
              ></img>
            </a>
			    </div>
          <div className="linkedinlogo">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../assets/images/linkedinLogo.png")}
                alt="Github"
                className="logo"
              ></img>
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
}

export default Footer;