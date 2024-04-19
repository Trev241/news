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
import article7 from "./assets/articles/resilience.txt";
import article8 from "./assets/articles/pwhl.txt";
import article9 from "./assets/articles/unb.txt";
import article10 from "./assets/articles/trump.txt";
import article11 from "./assets/articles/china.txt";
import article12 from "./assets/articles/ottawa.txt";
import article13 from "./assets/articles/singlelife.txt";
import article14 from "./assets/toronto-news/toronto-n1.txt";
import article15 from "./assets/toronto-news/toronto-n2.txt";
import article16 from "./assets/toronto-news/toronto-n3.txt";

import image1 from "./assets/articles/nba.jpg";
import image2 from "./assets/articles/premier.jpg";
import image3 from "./assets/articles/putin.jpg";
import image4 from "./assets/articles/tax.jpg";
import image5 from "./assets/articles/ttc.jpg";
import image6 from "./assets/articles/worldcup.jpg";
import image7 from "./assets/articles/resilience.jpg";
import image8 from "./assets/articles/pwhl.jpg";
import image9 from "./assets/articles/unb.jpg";
import image10 from "./assets/articles/trump.jpg";
import image11 from "./assets/articles/china.jpg";
import image12 from "./assets/articles/ottawa.jpg";
import image13 from "./assets/articles/singlelife.jpg";
import image14 from "./assets/toronto-news/toronto-n1.png";
import image15 from "./assets/toronto-news/toronto-n2.png";
import image16 from "./assets/toronto-news/toronto-n3.png";
import Search from "./pages/Search/Search.jsx";

import comment1 from "./assets/articles/nba_comment.txt";
import comment2 from "./assets/articles/premier_comment.txt";
import comment3 from "./assets/articles/putin_comment.txt";
import comment4 from "./assets/articles/tax_comment.txt";
import comment5 from "./assets/articles/ttc_comment.txt";
import comment6 from "./assets/articles/worldcup_comment.txt";
import comment7 from "./assets/articles/resilience_comment.txt";
import comment8 from "./assets/articles/pwhl_comment.txt";
import comment9 from "./assets/articles/unb_comment.txt";
import comment10 from "./assets/articles/trump_comment.txt";
import comment11 from "./assets/articles/china_comment.txt";
import comment12 from "./assets/articles/ottawa_comment.txt";
import comment13 from "./assets/articles/singlelife_comment.txt";
import comment14 from "./assets/toronto-news/toronto-n1_comment.txt";
import comment15 from "./assets/toronto-news/toronto-n2_comment.txt";
import comment16 from "./assets/toronto-news/toronto-n3_comment.txt";
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
    resilience: {
      contentPath: article7,
      image: image7,
      comment: comment7,
      path: "resilience",
    },
    pwhl: {
      contentPath: article8,
      image: image8,
      comment: comment8,
      path: "pwhl",
    },
    unb: {
      contentPath: article9,
      image: image9,
      comment: comment9,
      path: "unb",
    },
    trump: {
      contentPath: article10,
      image: image10,
      comment: comment10,
      path: "trump",
    },
    china: {
      contentPath: article11,
      image: image11,
      comment: comment11,
      path: "china",
    },
    ottawa: {
      contentPath: article12,
      image: image12,
      comment: comment12,
      path: "ottawa",
    },
    singlelife: {
      contentPath: article13,
      image: image13,
      comment: comment13,
      path: "singlelife",
    },
    toronto_new1: {
      contentPath: article14,
      image: image14,
      comment: comment14,
      path: "toronto_new1",
    },
    toronto_new2: {
      contentPath: article15,
      image: image15,
      comment: comment15,
      path: "toronto_new2",
    },
    toronto_new3: {
      contentPath: article16,
      image: image16,
      comment: comment16,
      path: "toronto_new3",
    },
  };

  const categories = {
    local: [
      articles.worldcup,
      articles.ttc,
      articles.tax,
      articles.singlelife,
      articles.ottawa,
      articles.toronto_new1,
      articles.toronto_new2,
      articles.toronto_new3,
    ],
    global: [articles.putin, articles.china, articles.trump],
    sports: [
      articles.worldcup,
      articles.nba,
      articles.resilience,
      articles.pwhl,
      articles.unb,
    ],
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
