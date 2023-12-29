import * as React from "react";
// import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
//  navLinks,
//  navLinkItem,
//  navLinkText,
} from "./layout.module.css";
import Navbar from "./navbar";
const Layout = ({ pageTitle, children }) => {
  /*const data = useStaticQuery(graphql`*/
    /*query {*/
      /*site {*/
        /*siteMetadata {*/
          /*title*/
        /*}*/
      /*}*/
    /*}*/
  /*`);*/

  return (
    <>
      <Navbar />
      <div className={container}>
       <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
