import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Dimmer, Loader, Pagination } from "semantic-ui-react";

import { FAILED, INITIALIZED, SUCCESS, LOADING } from "../../const";

import { getDoctors } from "../../actions/doctor";
import DoctorList from "../../components/doctorList";
import Header from "../../components/header";

import "./doctorListContainer.css";
class DoctorListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      status: INITIALIZED,
      location: "-1"
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const { location } = this.props.match.params;
    // validate coord and
    const patCoord = /-?\d+(.\d+)?,-?\d+(.\d+)?/;
    if (!patCoord.test(location)) {
      this.setState({ status: FAILED });
      alert("wrong input!");
    } else {
      // using async request to get data
      this.setState({ location: location, status: SUCCESS });
      this.props.getDoctors(location, this.state.currentPage);
    }
  }

  onChange(e, { activePage }) {
    const { location, currentPage } = this.state;
    if (activePage === currentPage) {
      return;
    } else {
      this.props.getDoctors(location, activePage);
      this.setState({ currentPage: activePage });
    }
  }
  render() {
    const { doctors, total, status } = this.props;
    let result = [];
    if (status === LOADING) {
      result.push(
        <Dimmer key={-1} active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    } else if (status === SUCCESS) {
      result.push(
        <Container key={-2}>
          <p> Total results: {total}</p>
          <DoctorList doctors={doctors} currentPage={this.state.currentPage} />
          <Pagination
            activePage={this.state.currentPage}
            totalPages={this.props.totalPage}
            onPageChange={this.onChange}
          />
        </Container>
      );
    }
    return (
      <div>
        <Header />
        {result}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.doctor.status,
    total: state.doctor.total,
    totalPage: state.doctor.totalPage,
    doctors: state.doctor.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDoctors: (coord, page) => dispatch(getDoctors(coord, page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorListContainer);
