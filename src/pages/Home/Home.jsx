import React from 'react';
import './Home.css';

const Home = () => {
   return (
      <div>
         <div className="home">
            <section className="top-section">
               <a href="/">
                  <img src="/src/images/logo.png" alt="SYT News Logo" width={150} height={50}/>
               </a>
               <h1>SYT News</h1>
               <p>Stay updated with the latest news and updates</p>
            </section>
            <section className="latest-news-section">
               <h2>Latest News</h2>
               <div className="news-item">
                  <h3>What next for Putin? After Navalny's death, many fear what leader will move on to</h3>
                  <p>With Ukraine retreating and western sanctions having little impact, the Russian president is growing bolder and may embark on more reckless moves</p>
               </div>
               <div className="news-item">
                  <h3>What you should be doing for your 2023 tax return right now</h3>
                  <p>Tax expert Jamie Golombek offers tips on CRA deadlines and changes</p>
               </div>
               <div className="news-item">
                  <h3>TTC service changes starting Sunday</h3>
                  <p>Several changes to TTC service beginning this Sunday</p>
               </div>
            </section>
            <section className="featured-section">
               <h2>Sport Articles</h2>
               <div className="article">
                  <h3>World cup</h3>
                  <p>Canada Prepares for Soccer's 2026 World Cup</p>
               </div>
               <div className="article">
                  <h3>Premier League</h3>
                  <p>Hojlund makes history as Man Utd close gap to Spurs</p>
               </div>
               <div className="article">
                  <h3>NBA</h3>
                  <p>Scottie Barnes' journey to NBA All-Star</p>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Home;
