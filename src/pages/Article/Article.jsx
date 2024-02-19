import React from "react";
import image from "./../../assets/articles/ttc.jpg";

import "./Article.css";

const Article = () => {
  return (
    <div className="article-root">
      <section className="article-main">
        <h1>TTC service changes starting Sunday</h1>
        <p>
          <i>Several changes to TTC service beginning this Sunday.</i>
        </p>

        <img src={image} />

        <p>
          Starting Sunday the TTC is changing bus service on several key routes
          and returning streetcar service to Broadview Station.
        </p>
        <p>
          In a news release issued Friday, the transit company said it is
          increasing capacity and frequency on the 29 Dufferin route on Saturday
          nights.
        </p>
        <p>
          “Saturday evening service on the busy 29 Dufferin route will be more
          frequent with increased capacity,” TTC said, adding that buses will
          run every five minutes between 7 to 10 p.m. on Saturdays.
        </p>
        <p>
          Other bus routes that will see increased service at various times
          include, 41 Keele, 125 Drewry, 935 Jane Express, 941 Keele Express and
          960 Steeles West Express. Routes that will see less frequent buses at
          certain times include 17 Birchmount and 900 Airport Express.
        </p>
        <p>
          Commuters are advised to refer to the TTC website for details on the
          full service adjustments beginning Sunday.
        </p>
        <p>
          Meanwhile, streetcar service to Broadview Station will resume again
          this Sunday with the return of 504 King, 505 Dundas and overnight
          services.
        </p>
        <p>
          “This completes a co-ordinated project between the City of Toronto,
          Toronto Water, and the TTC to renew and upgrade important
          infrastructure in the area,” the TTC said.
        </p>
        <p>
          Also, as a result of work beginning to replace certain water mains and
          streetcar tracks along King Street West, between Shaw and Dufferin,
          service in the area on the 63 Ossington, 501 Queen, 504/304 King and
          508 Lake Shore routes will be affected.
        </p>
        <p>
          TTC has released a video outlining the changes. The transit company
          said work is expected to be completed by December.
        </p>
        <p>
          For full details of the service adjustments, visit the{" "}
          <a href="https://www.ttc.ca">TTC website.</a>
        </p>
      </section>
    </div>
  );
};

export default Article;
