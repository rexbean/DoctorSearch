import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import DoctorInfo from "../doctorInfo";

class DoctorRow extends Component {
  render() {
    const { doctor } = this.props;
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src={doctor.profile.image_url} />
          </Grid.Column>
          <Grid.Column width={13}>
            <DoctorInfo doctor={doctor} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default DoctorRow;
