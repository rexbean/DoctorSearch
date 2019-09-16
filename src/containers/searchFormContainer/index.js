import React, { Component } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import SearchForm from "../../components/searchForm";
import { INITIALIZED, START, SUCCESS, FAILED } from "../../const";
import { addressToCoord } from "../../util/geocoding";

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: INITIALIZED,
      coord: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values) {
    try {
      this.setState({ status: START });
      //get coordinates
      let coord = await addressToCoord(values.address);
      this.setState({ status: SUCCESS, coord });
    } catch (e) {
      this.setState({ status: FAILED });
      alert(e);
    }
  }

  render() {
    const { status, coord } = this.state;
    if (status === START) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    } else if (status === SUCCESS) {
      return <Redirect to={`/doctors/${coord}`} />;
    } else if (status === INITIALIZED || status === FAILED) {
      return <SearchForm onSubmit={this.onSubmit} />;
    }
  }
}

export default SearchFormContainer;
