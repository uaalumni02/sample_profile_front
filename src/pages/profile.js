import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MDBCard style={{ width: '400px', height: '200px' }} >
        <MDBCardBody>
          <MDBCardTitle>Profile</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Profile;
