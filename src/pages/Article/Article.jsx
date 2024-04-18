import React, { useEffect, useState } from "react";

import "./Article.css";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

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
          <section className="my-4">
            <h2>Comments</h2>

            <div className="d-flex my-4 border rounded p-4">
              <IoPersonCircleOutline className="display-1" />

              <form className="flex-grow-1" onSubmit={handleSubmit}>
                <div className="container-fluid">
                  {/* <label
                    htmlFor="inputName"
                    className="col-sm-2 col-form-label"
                  >
                    Name
                  </label> */}
                  <div className="col-sm-10 mb-2">
                    <input
                      type="text"
                      className="form-control w-100"
                      id="inputName"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {/* <label
                    htmlFor="exampleInputComment1"
                    className="form-label mt-2"
                  >
                    Comment
                  </label> */}
                  <textarea
                    className="form-control"
                    id="exampleInputComment"
                    aria-describedby="commentHelp"
                    value={comment}
                    placeholder="Let others know what you think."
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="ms-auto mt-2 btn btn-primary"
                    >
                      <FaPen className="mb-1" />
                      &nbsp;&nbsp;
                      <span>Publish</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <ul className="p-0">
              {comments.map((item, idx) => (
                <li key={idx} className="mb-4">
                  <div className="d-flex">
                    <IoPersonCircleSharp className="display-1 me-2" />
                    <div className="w-75">
                      <b>{item.name}</b>
                      <p>{item.comment}</p>
                      <small>at {item.time}</small>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  );
};

export default Article;
