/**
 * About Page, My Portfolio Page, Resume Page, Contact Info Page
 */


import React from "react";

function Navigation(props) {
  const tabs = ["About Me", "My Portfolio", "Resume", "Contact Info"];
  return (
    // <div className="tabs is-centered">
    //   <ul className="nav nav-tabs">
    //     {tabs.map((tab) => (
    //       <li
    //         className={
    //           props.currentPage === tab ? "nav-item is-active" : "nav-item"
    //         }
    //         key={tab}
    //       >
    //         <a
    //           href={"#" + tab.toLowerCase()}
    //           // Whenever a tab is clicked on,
    //           // the current page is set through the handlePageChange props.
    //           onClick={() => props.handlePageChange(tab)}
    //           className={
    //             props.currentPage === tab ? "nav-link active" : "nav-link"
    //           }
    //         >
    //           {tab}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="wrapper">
      <div className="sidebar">
        <div className="profilePicture">
          <img src={require("../assets/images/MyPhoto1.jpeg")} alt=""></img>
          <h3>Aspiring Software Engineer</h3>
        </div>
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li
              className={
                props.currentPage === tab ? "nav-item is-active" : "nav-item"
              }
              key={tab}
            >
              <a
                href={"#" + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active" : "nav-link"
                }
              >
                <span className="item">
                {tab}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default Navigation;
