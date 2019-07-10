import React from "react";
import { Navigation } from "./";

const AppLayout = ({ children }) => (
  <div>
    <header>
      <Navigation />
    </header>

    <main>{children}</main>

    <footer>LyrX &copy; </footer>
  </div>
);

export default AppLayout;
