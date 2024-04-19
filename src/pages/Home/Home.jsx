import React, { useState } from "react";

import caroImage1 from "./../../assets/articles/ttc.jpg";
import caroImage2 from "./../../assets/articles/worldcup.jpg";

import toronto_n1 from "./../../assets/toronto-news/toronto-n1.png";
import toronto_n2 from "./../../assets/toronto-news/toronto-n2.png";
import toronto_n3 from "./../../assets/toronto-news/toronto-n3.png";

import "./Home.css";

import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [index, setIndex] = useState(0);
  const caroTitles = [
    "TTC service changes starting Sunday",
    "Canada Prepares for Soccer's 2026 World Cup",
  ];
  const caroLeads = [
    "Starting Sunday the TTC is changing bus service on several key routes and returning streetcar service to Broadview Station. In a news release issued Friday, the transit company said it is increasing capacity and frequency on the 29 Dufferin route on Saturday nights.",
    "While no new stadiums will be built in Vancouver or Toronto, multimillion-dollar renovations must be finished on a tight deadline. This week we learned how many World Cup games will take place in Vancouver and Toronto, which will co-host the men’s soccer tournament with cities in the United States and Mexico in 2026.",
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid">
      <Container fluid className="mt-5">
        <Row className="mb-5">
          <section className="col-lg-5 mb-2">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <Link to="article/ttc">
                  <img
                    className="rounded img-fluid"
                    src={caroImage1}
                    alt="Featured News 1"
                  />
                </Link>
              </Carousel.Item>

              <Carousel.Item>
                <Link to="article/worldcup">
                  <img
                    className="rounded img-fluid"
                    src={caroImage2}
                    alt="Featured News 1"
                  />
                </Link>
              </Carousel.Item>
            </Carousel>
          </section>

          <section className="col-md">
            <Link to="article/worldcup">
              <h1>{caroTitles[index]}</h1>
            </Link>
            <p className="lead">{caroLeads[index]}</p>
          </section>
        </Row>

        <Row className="mb-5">
          <h2>Other categories</h2>
          <Container>
            <Row>
              <Col md className="border rounded p-3 bg-light m-1">
                <h3>Popular</h3>
                <div className="news-list">
                  <div className="news-item">
                    <Link to="article/trump">
                      <p className="lead text-dark clickable">
                        Trump unable to post bond for $454M US civil judgment,
                        his lawyers say
                      </p>
                    </Link>
                    <hr />
                    <Link to="article/china">
                      <p className="lead text-dark clickable">
                        This business owner brought most of her manufacturing
                        home from China — and feels punished for it
                      </p>
                    </Link>
                    <hr />
                    <Link to="article/ottawa">
                      <p className="lead text-dark clickable">
                        Ottawa police shocked, struck, kicked Black man in case
                        of mistaken identity
                      </p>
                    </Link>
                    <hr />
                    <Link to="article/singlelife">
                      <p className="lead text-dark clickable">
                        As more people choose the single life, researchers ask:
                        are they happier?
                      </p>
                    </Link>
                  </div>
                </div>
              </Col>

              <Col md className="border rounded p-3 bg-light m-1">
                <h3>Sports</h3>
                <div className="news-list">
                  <div className="news-item">
                    <Link to="article/worldcup">
                      <p className="lead text-dark clickable">
                        Canada Prepares for Soccer's 2026 World Cup
                      </p>
                    </Link>
                    <hr />
                    <Link to="article/resilience">
                      <p className="lead text-dark clickable">
                        Resilience is one of Canadian women's soccer team's
                        greatest assets as it looks to defend Olympic gold
                      </p>
                    </Link>
                    <hr />
                    <Link to="article/pwhl">
                      <p className="lead text-dark clickable">
                        PWHL Toronto wins 10th straight, edging Montreal in
                        Pittsburgh for share of 1st place
                      </p>
                    </Link>
                    <hr />
                    <Link to="article/unb">
                      <p className="lead text-dark clickable">
                        UNB men's hockey team blanks UQTR to complete perfect
                        season, repeat as University Cup champion{" "}
                      </p>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>

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
