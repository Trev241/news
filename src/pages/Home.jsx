import React from 'react';
import NavBar from '../components/NavBar/NavBar.jsx';

const Home = () => {
   return (
      <div>
         <NavBar />
         <h1>Welcome to the Home Page!</h1>
         <p>This is the home page content.</p>
         <h2>Latest News</h2>
         <ul>
            <li>News 1</li>
            <li>News 2</li>
            <li>News 3</li>
         </ul>
      </div>
   );
};

export default Home;
