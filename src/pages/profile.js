import React, { useState, useEffect } from "react";
import EditModal from "../components/editModal";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

const Profile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const fetchProfileData = () => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf("/") + 1);
    fetch("http://localhost:3000/api/profile/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        setName(response.data.name);
        setBio(response.data.bio);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <MDBCard style={{ width: "400px", height: "200px" }}>
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{bio}</MDBCardText>
          {/* Pass bio as a prop to EditModal */}
          <EditModal name={name} bio={bio} />
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Profile;
