import React from "react";
import { Navigation } from "./";

const AppLayout = ({ children }) => (
  <div className="Site">
    <header>
      <Navigation />
    </header>
    <main className="Site-content">{children}</main>
    <footer>LyrX &copy; </footer>
  </div>
);

export default AppLayout;
