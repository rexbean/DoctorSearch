import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import DoctorRow from "../doctorRow";
import { count } from "../../const";
class DoctorList extends Component {
  render() {
    const { doctors, currentPage } = this.props;
    let result = [];
    doctors.forEach((doctor, index) => {
      result.push(
        <Segment key={index + currentPage * count}>
          <DoctorRow doctor={doctor} />
        </Segment>
      );
    });
    return <div>{result}</div>;
  }
}
export default DoctorList;
