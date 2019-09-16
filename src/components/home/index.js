import React, { Component } from "react";
import { Container, Image } from "semantic-ui-react";

import SearchFormContainer from "../../containers/searchFormContainer";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <Image src="logo_200.png" alt="logo here" />
        <SearchFormContainer />
      </div>
    );
  }
}
export default Home;
