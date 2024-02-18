import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import News from './pages/News';
import Sport from './pages/Sport.jsx'
import Radio from './pages/Radio.jsx'
import TV from './pages/TV.jsx'
import Trending from "./pages/Trending.jsx";

const App = () => {
   return (
      <Router>
         <div>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/news" component={News} />
               <Route path="/sport" component={Sport} />
               <Route path="/radio" component={Radio} />
               <Route path="/tv" component={TV} />
               <Route path="/trending" component={Trending} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
