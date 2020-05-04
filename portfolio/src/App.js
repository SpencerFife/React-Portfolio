import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavTabs from "./pages/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="content">
        <NavTabs />
        <Switch>
          <Route exact path="/React-Portfolio" component={About} />
          <Route exact path="/React-Portfolio" component={About} />
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
