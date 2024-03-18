import React from "react";
import image from "./../../assets/articles/ttc.jpg";
import toronto_n1 from "./../../assets/toronto-news/toronto-n1.png";
import toronto_n2 from "./../../assets/toronto-news/toronto-n2.png";
import toronto_n3 from "./../../assets/toronto-news/toronto-n3.png";
import "./Home.css";

const Home = () => {
   return (
      <div className="container">
         <header>
            <h1>SYT News</h1>
            <p>Stay updated with the latest news and updates</p>
         </header>
         <div className="main-content">
            <section className="sidebar">
               <div className="sidebar-news">
                  <h2>Sport Articles</h2>
                  <div className="news-list">
                     <div className="news-item">
                        <h4>World cup</h4>
                        <a href="article">
                           <p>Canada Prepares for Soccer's 2026 World Cup</p>
                        </a>
                        <a href="article">
                           <p>Canadian men net new national scoring record in 11-0 win over Cayman Islands</p>
                        </a>
                     </div>
                     <div className="news-item">
                        <h4>Hockey</h4>
                        <a href="article">
                           <p>PWHL Toronto wins 10th straight, edging Montreal in Pittsburgh for share of 1st place</p>
                        </a>
                        <a href="article">
                           <p>UNB men's hockey team blanks UQTR to complete perfect season, repeat as University Cup
                              champion </p>
                        </a>
                     </div>
                  </div>
               </div>
            </section>
            <section className="main-feature">
               <div className="featured-news">
                  <div className="news-list">
                     <div className="news-item">
                        <a href="article">
                           <img src={image} alt="Featured News 1"/>
                           <div className="news-content">
                              <h3>TTC service changes starting Sunday</h3>
                           </div>
                        </a>
                        <p>Several changes to TTC service beginning this Sunday</p>
                     </div>
               </div>
         </div>
      </section>
   <section className="menu">
      <div className="menu-news">
         <h2>Popular Now</h2>
         <div className="news-list">
            <div className="news-item">
               <a href="article">
                  <p>Trump unable to post bond for $454M US civil judgment, his lawyers say</p>
               </a>
               <a href="article">
                  <p>This business owner brought most of her manufacturing home from China — and feels punished
                     for it</p>
               </a>
               <a href="article">
                  <p>Ottawa police shocked, struck, kicked Black man in case of mistaken identity</p>
               </a>
               <a href="article">
                  <p>As more people choose the single life, researchers ask: are they happier?</p>
               </a>
            </div>

         </div>
      </div>
   </section>
</div>
   <section className="additional-news">
      <h2>Toronto News</h2>
      <div className="news-list">
         <div className="news-item">
            <a href="#">
               <img src={toronto_n1} alt="Toronto New 1"/>
               <h4>A car was stolen every 40 minutes in Toronto last year, police chief says</h4>
            </a>
            <p>More than 12,000 stolen cars last year valued at almost $800 million
            </p>

         </div>
         <div className="news-item">
            <a href="#">
               <img src={toronto_n2} alt="Toronto New 2"/>
               <h4>How one Ontario city is using modular cabins to help with 'unprecedented' homelessness
                  crisis</h4>
            </a>
            <p>Peterborough mayor says plan is drawing interest from across the country
            </p>
         </div>
         <div className="news-item">
            <a href="#">
               <img src={toronto_n3} alt="Toronto New 3"/>
               <h4>Shoppers Drug Mart says it doesn't have medication review targets, but records show it does
               </h4>
            </a>
            <p>Current and former owners, pharmacists say corporate management pressured them to meet
               ‘unethical’
               targets</p>
         </div>

      </div>
   </section>
</div>
)
   ;
};

export default Home;
