import React from "react";
import { Navigation } from "./";

const AppLayout = ({ children }) => (
  <div>
    <header>
      <Navigation />
    </header>

    <main>{children}</main>

    <footer>
      An apropriate footer sentence with a copyright sign &copy;{" "}
    </footer>
  </div>
);

export default AppLayout;
