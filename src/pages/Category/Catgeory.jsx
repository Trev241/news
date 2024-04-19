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
  }, [articles]);

  return (
    <div className="container">
      <h1
        className="display-1 mt-5 text-center"
        style={{ fontVariant: "small-caps" }}
      >
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      <hr className="mb-5" />
      {data &&
        data.map((entry, idx) => (
          <Link to={`/article/${entry.path}`}>
            <div className="row item p-3">
              <div className="col-md-3 my-1">
                <img className="img-fluid rounded" src={entry.image} />
              </div>
              <div className="col text-dark">
                <h3>{entry.heading}</h3>
                <p className="lead">{entry.lead}...</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Category;
