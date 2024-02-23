import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Article from "./pages/Article/Article.jsx";
import News from "./pages/News/News.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./scss/styles.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/news" component={News} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
