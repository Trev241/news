import React from 'react';
import NavBar from '../../components/NavBar/NavBar.jsx';
import './Home.css';

const Home = () => {
   return (
      <div>
         <NavBar/>

         <div className="home">
            <section className="top-section">
               <h1>Welcome to SYT News</h1>
               <p>Stay updated with the latest news and updates</p>
            </section>
            <section className="latest-news-section">
               <h2>Latest News</h2>
               <div className="news-item">
                  <h3>News Title 1</h3>
                  <p>Description of the news item goes here...</p>
               </div>
               <div className="news-item">
                  <h3>News Title 2</h3>
                  <p>Description of the news item goes here...</p>
               </div>
               <div className="news-item">
                  <h3>News Title 3</h3>
                  <p>Description of the news item goes here...</p>
               </div>
            </section>
            <section className="featured-section">
               <h2>Sport Articles</h2>
               <div className="article">
                  <h3>World cup</h3>
                  <p>World Cup article goes here...</p>
               </div>
               <div className="article">
                  <h3>Premier League</h3>
                  <p>Premier League article goes here...</p>
               </div>
               <div className="article">
                  <h3>NBA</h3>
                  <p>NBA article goes here...</p>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Home;
