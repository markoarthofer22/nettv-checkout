import React, { useEffect } from "react";
import Helmet from "react-helmet";
import NoPage from "../404/no-page.component";
import Container from "../../components/layout/container.component";
import { withRouter, useParams } from "react-router-dom";
// styles
import "./defaultPage.styles.scss";

//redux
const DefaultPage = props => {
  return <div>Default Page</div>;
};

export default withRouter(DefaultPage);
