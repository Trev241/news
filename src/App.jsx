import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Article from "./pages/Article/Article.jsx";
import News from "./pages/News/News.jsx";
import Navbar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./scss/styles.scss";

import article1 from "./assets/articles/nba.txt";
import article2 from "./assets/articles/premier.txt";
import article3 from "./assets/articles/putin.txt";
import article4 from "./assets/articles/tax.txt";
import article5 from "./assets/articles/ttc.txt";
import article6 from "./assets/articles/worldcup.txt";

import image1 from "./assets/articles/nba.jpg";
import image2 from "./assets/articles/premier.jpg";
import image3 from "./assets/articles/putin.jpg";
import image4 from "./assets/articles/tax.jpg";
import image5 from "./assets/articles/ttc.jpg";
import image6 from "./assets/articles/worldcup.jpg";
import Search from "./pages/Search/Search.jsx";

import comment1 from "./assets/articles/nba_comment.txt";
import comment2 from "./assets/articles/premier_comment.txt";
import comment3 from "./assets/articles/putin_comment.txt";
import comment4 from "./assets/articles/tax_comment.txt";
import comment5 from "./assets/articles/ttc_comment.txt";
import comment6 from "./assets/articles/worldcup_comment.txt";
import Category from "./pages/Category/Catgeory.jsx";

const App = () => {
  const articles = {
    nba: {
      contentPath: article1,
      image: image1,
      comment: comment1,
      path: "nba",
    },
    premier: {
      contentPath: article2,
      image: image2,
      comment: comment2,
      path: "premier",
    },
    putin: {
      contentPath: article3,
      image: image3,
      comment: comment3,
      path: "putin",
    },
    tax: {
      contentPath: article4,
      image: image4,
      comment: comment4,
      path: "tax",
    },
    ttc: {
      contentPath: article5,
      image: image5,
      comment: comment5,
      path: "ttc",
    },
    worldcup: {
      contentPath: article6,
      image: image6,
      comment: comment6,
      path: "worldcup",
    },
  };

  const categories = {
    local: [articles.worldcup, articles.ttc, articles.tax],
    global: [articles.putin],
    sports: [articles.worldcup, articles.nba],
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* <Route exact path="/article" component={Article} /> */}
        {Object.entries(articles).map((entry, idx) => (
          <Route
            key={idx}
            path={`/article/${entry[0]}`}
            element={
              <Article
                articlePath={entry[1].contentPath}
                imagePath={entry[1].image}
                commentPath={entry[1].comment}
              />
            }
          />
        ))}
        {Object.entries(categories).map((entry, idx) => (
          <Route
            key={idx}
            path={`/category/${entry[0]}`}
            element={<Category categoryName={entry[0]} articles={entry[1]} />}
          />
        ))}
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
