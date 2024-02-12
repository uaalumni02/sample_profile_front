import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
} from "mdb-react-ui-kit";

const EditModal = ({ name, bio }) => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn style={{ width: "115px", height: "60px" }} onClick={toggleOpen}>
        Edit
      </MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Profile</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput id="form1" label="Name" value={name} />
              <br />
              <MDBTextArea id="form13" label="Bio" value={bio} />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                style={{ width: "115px", height: "60px" }}
                color="secondary"
                onClick={toggleOpen}
              >
                Close
              </MDBBtn>
              <MDBBtn style={{ width: "115px", height: "60px" }}>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default EditModal;
