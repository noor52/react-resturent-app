import React from "react";
// import global from "./logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        style={{ padding: "30px" }}
        className="navbar navbar-expand-lg navbar-yellow bg-light"
      >
        {/* <img
          className="grow bw2 shadow-5"
          src={global}
          height="175"
          width="175"
          ali="pic"
        /> */}
        {/* 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a style={{ padding: "30px" }} class="nav-link" href="#">
                Home <span class="sr-only"></span>
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    );
  }
}

export default Navbar;
