import React from "react";
import { flaticonWelcomeImage } from "../..";
import EmailHeader from "../email/EmailHeader";
import Button from "../layout/Button";

const Article = () => {
    return (
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
          <EmailHeader />
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <Button buttonText="Reply" />
            <Button buttonText="Forward" />
          </section>
        </article>
    );
}

export default Article;