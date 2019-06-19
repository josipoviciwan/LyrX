import React from "react";
import Navigation from "./components/navigation";

const App = ({ children }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <main>{children}</main>
    <footer>  An apropriate footer sentence with a copyright sign &copy; </footer>
  </div>
);

export default App;
