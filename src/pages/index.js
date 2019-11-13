// @title: <<gatsby-002-env-variable>> program written in gatsby-JS.
// @desc: Creates a simple helloWorld started with environment variables.
// @author: Mustapha Benmbarek.
// @Copyright © 2019 All rights reserved.
// @version: 1.0.

import React from "react";

const IndexPage = () => {
  return (
    <div>
      <h1>{`${process.env.GATSBY_APP_TITLE}`}</h1>
      <h2>{`${process.env.GATSBY_APP_AUTHOR}`}</h2>
      <p>
        {`${process.env.GATSBY_APP_DESC}`} {`${process.env.GATSBY_APP_URL}`}
      </p>
    </div>
  );
};

export default IndexPage;
