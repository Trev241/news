import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Article from "./pages/Article/Article.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
