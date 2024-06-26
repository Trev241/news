import React, { useEffect, useState } from "react";

import article1 from "../../assets/articles/nba.txt";
import article2 from "../../assets/articles/premier.txt";
import article3 from "../../assets/articles/putin.txt";
import article4 from "../../assets/articles/tax.txt";
import article5 from "../../assets/articles/ttc.txt";
import article6 from "../../assets/articles/worldcup.txt";
import article7 from "../../assets/articles/resilience.txt";
import article8 from "../../assets/articles/pwhl.txt";
import article9 from "../../assets/articles/unb.txt";
import article10 from "../../assets/articles/trump.txt";
import article11 from "../../assets/articles/china.txt";
import article12 from "../../assets/articles/ottawa.txt";
import article13 from "../../assets/articles/singlelife.txt";
import article14 from "../../assets/toronto-news/toronto-n1.txt";
import article15 from "../../assets/toronto-news/toronto-n2.txt";
import article16 from "../../assets/toronto-news/toronto-n3.txt";

import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [articleData, setArticleData] = useState();
  const [results, setResults] = useState([]);

  const articles = {
    nba: article1,
    premier: article2,
    putin: article3,
    tax: article4,
    ttc: article5,
    worldcup: article6,
    resilience: article7,
    pwhl: article8,
    unb: article9,
    trump: article10,
    china: article11,
    ottawa: article12,
    singlelife: article13,
    toronto_new1: article14,
    toronto_new2: article15,
    toronto_new3: article16,
  };

  useEffect(() => {
    (async () => {
      for (let name in articles) {
        articles[name] = await (await fetch(articles[name])).text();
      }
      setArticleData(articles);
    })();
  }, []);

  useEffect(() => {
    const results = [];
    const query = searchParams.get("query");

    for (let name in articleData) {
      let pattern = new RegExp(query, "i");
      if (articleData[name].match(pattern)) results.push(name);
    }

    setResults(results);
  }, [searchParams, articleData]);

  return (
    <div className="container">
      <h1>Search results</h1>
      <p className="lead">
        For articles containing "<i>{searchParams.get("query")}</i>"
      </p>
      <ul>
        {results.length > 0 ? (
          results.map((result, idx) => {
            let lines = articleData[result].split("\n");
            return (
              <li key={idx} className="mb-2">
                <div>
                  <Link to={`/article/${result}`}>{lines[0]}</Link>
                  <p>{lines[1].slice(0, 100).trim()}...</p>
                </div>
              </li>
            );
          })
        ) : (
          <i>No related articles found.</i>
        )}
      </ul>
    </div>
  );
};

export default Search;
