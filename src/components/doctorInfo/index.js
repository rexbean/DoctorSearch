import React, { Component } from "react";
import "./doctorInfo.css";
class DoctorInfo extends Component {
  render() {
    const { doctor } = this.props;
    let actors = [];
    let practices = [];

    for (let specialty of doctor.specialties) {
      actors.push(`${specialty.actor}, `);
    }
    let i = 0;
    for (let practice of doctor.practices) {
      practices.push(<li key={i}>{practice.name}</li>);
      i++;
    }

    return (
      <div className="doctorInfo">
        <p id="doctorName">
          <b>
            {doctor.profile.first_name} {doctor.profile.middle_name}
            {doctor.profile.lastName}
          </b>
        </p>
        <span>
          <b>Specialties</b>: {actors}
        </span>
        <br />
        <span>
          <b>Practices &nbsp;</b>:<ul className="list">{practices}</ul>
        </span>
      </div>
    );
  }
}
export default DoctorInfo;
