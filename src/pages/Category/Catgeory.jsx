import React, { useEffect, useState } from "react";

import "./Category.css";
import { Link } from "react-router-dom";

const Category = ({ categoryName, articles }) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const buffer = [];
      for (let article of articles) {
        const result = await fetch(article.contentPath);
        const lines = (await result.text()).split("\n");
        buffer.push({
          heading: lines[0],
          image: article.image,
          lead: lines[1].slice(0, 125).trim(),
          path: article.path,
        });
      }

      console.log(buffer);
      setData(buffer);
    })();
  }, []);

  return (
    <div className="container">
      <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
      {data &&
        data.map((entry, idx) => (
          <div key={idx} className="container">
            <Link to={`/article/${entry.path}`}>
              <div className="row item p-3">
                <div className="col-2">
                  <img className="img-fluid rounded" src={entry.image} />
                </div>
                <div className="col text-dark">
                  <h3>{entry.heading}</h3>
                  <p className="lead">{entry.lead}...</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Category;
