import React from "react";
import image from "./../../assets/articles/ttc.jpg";
import toronto_n1 from "./../../assets/toronto-news/toronto-n1.png";
import toronto_n2 from "./../../assets/toronto-news/toronto-n2.png";
import toronto_n3 from "./../../assets/toronto-news/toronto-n3.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container-fluid my-5 main-content">
        <div className="row">
          <section className="col-lg-6 main-feature">
            <div className="featured-news">
              <div className="news-list">
                <div>
                  <Link to="article/ttc">
                    <h3>TTC service changes starting Sunday</h3>
                    <p>Several changes to TTC service beginning this Sunday</p>
                    <img
                      className="rounded img-fluid"
                      src={image}
                      alt="Featured News 1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="col-md">
            <div className="sidebar-news">
              <h2>Sports</h2>
              <div className="news-list">
                <div className="news-item">
                  <h4>World cup</h4>
                  <Link to="article/worldcup">
                    <p>Canada Prepares for Soccer's 2026 World Cup</p>
                  </Link>
                  <Link to="article/resilience">
                    <p>
                      Resilience is one of Canadian women's soccer team's greatest assets as it looks to defend Olympic gold
                    </p>
                  </Link>
                </div>
                <div className="news-item">
                  <h4>Hockey</h4>
                  <Link to="article/pwhl">
                    <p>
                      PWHL Toronto wins 10th straight, edging Montreal in
                      Pittsburgh for share of 1st place
                    </p>
                  </Link>
                  <Link to="article/unb">
                    <p>
                      UNB men's hockey team blanks UQTR to complete perfect
                      season, repeat as University Cup champion{" "}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="col-md">
            <div className="menu-news">
              <h2>Popular</h2>
              <div className="news-list">
                <div className="news-item">
                  <Link to="article/trump">
                    <p>
                      Trump unable to post bond for $454M US civil judgment, his
                      lawyers say
                    </p>
                  </Link>
                  <Link to="article/china">
                    <p>
                      This business owner brought most of her manufacturing home
                      from China — and feels punished for it
                    </p>
                  </Link>
                  <Link to="article/ottawa">
                    <p>
                      Ottawa police shocked, struck, kicked Black man in case of
                      mistaken identity
                    </p>
                  </Link>
                  <Link to="article/singlelife">
                    <p>
                      As more people choose the single life, researchers ask:
                      are they happier?
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="container-fluid mb-5 additional-news">
        <h2>Happening in Toronto</h2>
        <div className="row news-list">
          <div className="col-sm">
            <Link to="article/toronto_new1">
              <img
                className="img-fluid my-2 rounded"
                src={toronto_n1}
                alt="Toronto New 1"
              />
              <h4>
                A car was stolen every 40 minutes in Toronto last year, police
                chief says
              </h4>
            </Link>
            <p>
              More than 12,000 stolen cars last year valued at almost $800
              million
            </p>
          </div>
          <div className="col-sm">
            <Link to="article/toronto_new2">
              <img
                className="img-fluid my-2 rounded"
                src={toronto_n2}
                alt="Toronto New 2"
              />
              <h4>
                How one Ontario city is using modular cabins to help with
                'unprecedented' homelessness crisis
              </h4>
            </Link>
            <p>
              Peterborough mayor says plan is drawing interest from across the
              country
            </p>
          </div>
          <div className="col-sm">
            <Link to="article/toronto_new3">
              <img
                className="img-fluid my-2 rounded"
                src={toronto_n3}
                alt="Toronto New 3"
              />
              <h4>
                Shoppers Drug Mart says it doesn't have medication review
                targets, but records show it does
              </h4>
            </Link>
            <p>
              Current and former owners, pharmacists say corporate management
              pressured them to meet ‘unethical’ targets
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
