import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Signup = () => {
  // const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("registration failed") 
      console.log("registration faled")
    }
    else {
      window.alert("registration success")
      console.log("registration success")

      // history.push("/login")
    }
  };

  return (
    <div>
      <>
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      name="name"
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Phone Number"
                      id="form2"
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Professional"
                      id="form2"
                      type="text"
                      name="work"
                      value={user.work}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="password"
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      label="Repeat your password"
                      id="cpassword"
                      type="password"
                      name="cpassword"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-submit">
                    <MDBBtn className="mb-4" size="lg" onClick={postData}>
                      Register
                    </MDBBtn>
                  </div>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
              <div
                className="text-center"
                style={{
                  marginTop: "20px",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <NavLink
                  to="/login"
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  I am already registered
                </NavLink>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </>
    </div>
  );
};

export default Signup;
