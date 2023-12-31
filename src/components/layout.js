import * as React from "react";
import {
  container,
  content,
  header,
} from "./layout.module.css";
import Navbar from "./navbar";
const Layout = ({ headerContent, children }) => {
  return (
    <>
      <Navbar />
      <div className={container}>
        {headerContent && <header className={header}>{headerContent}</header>}
        <main className={content}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
