import React from 'react';
import NavBar from '../components/NavBar/NavBar.jsx';

const Trending = () => {
   return (
      <div>
         <NavBar />
         <h1>Latest News</h1>
         <p>This is the trending page content.</p>
         <ul>
            <li>News 1</li>
            <li>News 2</li>
            <li>News 3</li>
         </ul>
      </div>
   );
};

export default Trending;
