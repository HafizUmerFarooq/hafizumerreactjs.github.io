import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="container-fluid mb-1">
        <div className="row">
            <div className="col-md-12 mx-auto">
        <nav class="navbar navbar-expand-lg bg-dark pl-3 pr-3">
<Link class="navbar-brand text-light" to="/">Hafiz Umer Site</Link>
<button class="navbar-toggler navbar-light bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ml-auto">
  <li class="nav-item active">
    <Link to="/" class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></Link>
  </li>
  <li class="nav-item">
    <Link to="/service" class="nav-link text-light" href="#">Service</Link>
  </li>
  <li class="nav-item">
    <Link to="/about" class="nav-link text-light" href="#">About</Link>
  </li>
  <li class="nav-item">
    <Link to="/contact" class="nav-link text-light" href="#">Contact</Link>
  </li>
  
</ul>
</div>
</nav>
</div>
        </div>
    </div>
    );
}

export default Navbar;