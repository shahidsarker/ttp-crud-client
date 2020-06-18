import React from "react";

const NavBar = (props) => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="btn btn-outline-light" href="login.html">Login</a>
                </li>
                <li class="nav-item">
                    <p>&nbsp;</p>
                </li>
                <li class="nav-item">
                    <a class="btn btn-success" href="sign_up.html">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
};

export default NavBar;