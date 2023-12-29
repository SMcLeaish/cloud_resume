import React from "react"
import { Link } from "gatsby"
import { navbar } from "./navbar.module.css"

const Navbar = () => (
  <nav className={navbar}>
    <ul>
      <li><Link to="/" activeClassName={navbar.active}>Home</Link></li>
      <li><Link to="/blog" activeClassName={navbar.active}>Blog</Link></li>
      <li><Link to="/portfolio" activeClassName={navbar.active}>Portfolio</Link></li>
    </ul>
  </nav>
)

export default Navbar
