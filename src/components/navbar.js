import React from "react"
import { Link } from "gatsby"
import { navbar, navbarIcons} from "./navbar.module.css"
import linkedinIcon from "../images/linkedin.svg"
import githubIcon from "../images/square-github.svg"

const Navbar = () => (
  <nav className={navbar}>
    <ul>
      <li><Link to="/" activeClassName="active">home</Link></li>
      <li><Link to="/about" activeClassName="active">about me</Link></li>
    </ul>
    <div className={navbarIcons}>
      <a href="https://www.linkedin.com/in/sean-mcleaish" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/SMcLeaish" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  </nav>
)

export default Navbar
