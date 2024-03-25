import React, { useEffect, useState } from "react";

import "./Article.css";

const Article = ({ articlePath, imagePath, commentPath }) => {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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

  useEffect(() => {
    (async () => {
      const result = await fetch(commentPath);
      const lines = (await result.text()).split("\n").map((line) => {
        const [name, comment, time] = line.split("|");
        return { name, comment, time };
      });

      console.log(lines);

      setComments(lines);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = e.target.inputName.value;

    const currentTime = new Date().toLocaleString();
    setComments([...comments, { name, comment, time: currentTime }]);
    setName("");
    setComment("");
  };

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
        <div className="container border-top border-2 my-5 px-5">
          <section className="mb-4">
            <h2>Comments</h2>
            <form onSubmit={handleSubmit}>
              <div className="border rounded mb-2">
                <div className="container">
                  <label for="inputName" className="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Others will see the name you enter here above your comment"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <label
                    htmlFor="exampleInputComment1"
                    className="form-label mt-2"
                  >
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleInputComment"
                    aria-describedby="commentHelp"
                    value={comment}
                    placeholder="Let others know what you think."
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <button type="submit" className="mt-2 btn btn-primary">
                    Post
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-4">
              {comments.map((item, index) => (
                <div className="card w-100 mb-2" key={index}>
                  <div className="card-body">
                    <div className="card-title">
                      <b>{item.name}</b>&nbsp;
                      <small className="text-muted">{item.time}</small>
                    </div>
                    <p className="card-text">{item.comment}</p>
                    <p className="card-text"></p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    )
  );
};

export default Article;
