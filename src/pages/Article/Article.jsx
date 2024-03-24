import React, {useEffect, useState} from "react";

import "./Article.css";

const Article = ({articlePath, imagePath, commentPath}) => {
   const [data, setData] = useState(null);
   const [comments, setComments] = useState([]);
   const [name, setName] = useState('');
   const [comment, setComment] = useState('');


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
            const [name, comment, time] = line.split('|')
            return {name, comment, time}
         })

         console.log(lines);

         setComments(lines);
      })();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      const currentTime = new Date().toLocaleString();
      setComments([...comments, { name, comment, time: currentTime }]);
      setName('');
      setComment('');
   }

   return (
      data && (
         <div>
            <div className="article-root my-5 px-5">
               <section className="article-main">
                  <h1>{data.heading}</h1>
                  <p className="lead">{data.lead}</p>

                  <img className="img-fluid my-4" src={imagePath}/>

                  {data.content.map((para, idx) => (
                     <p key={idx}>{para}</p>
                  ))}
               </section>
            </div>
            <div className="article-comments my-5 px-5">
               <section className="col-lg-6 mb-4">
                  <h2>Comments</h2>
                  <form onSubmit={handleSubmit}>
                     <div className="mb-2">
                        <label htmlFor="exampleInputName1" className="form-label">
                           Enter your name:
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="exampleInputName"
                           aria-describedby="nameHelp"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="exampleInputComment1" className="form-label">
                           Comment:
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="exampleInputComment"
                           aria-describedby="commentHelp"
                           value={comment}
                           onChange={(e) => setComment(e.target.value)}
                        />
                     </div>
                     <button type="submit" className="btn btn-primary">
                        Submit
                     </button>
                  </form>
                  <div className="comment-list mt-4">
                     {comments.map((item, index) => (
                        <div className="card mb-2" key={index}>
                           <div className="card-body">
                              <h5 className="card-title"><b>Name: {item.name}</b></h5>
                              <p className="card-text">Comment: {item.comment}</p>
                              <p className="card-text"><small className="text-muted">Submitted at {item.time}</small></p>
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
