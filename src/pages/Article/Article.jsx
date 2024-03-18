import React, { useEffect, useState } from "react";

import "./Article.css";

const Article = ({ articlePath, imagePath }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetch(articlePath);
      const lines = (await result.text()).split("\n");
      const data = {
        heading: lines[0],
        lead: lines[1],
        content: lines.slice(2),
      };

      console.log(data);

      setData(data);
    })();
  }, []);

  return (
    data && (
      <div>
        <div className="article-root my-5 px-5">
          <section className="article-main">
            <h1>{data.heading}</h1>
            <p className="lead">{data.lead}</p>

            <img className="img-fluid my-4" src={imagePath} />

            {data.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>
        </div>
      </div>
    )
  );
};

export default Article;
