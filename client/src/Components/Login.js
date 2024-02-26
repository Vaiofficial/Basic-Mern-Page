import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';

const Login = () => {
  return (
    <div>
      <>
        <MDBContainer fluid>

          <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

          <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
            <MDBCardBody className='p-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

              <div className='d-flex justify-content-center mb-4' style={{ marginTop: "20px", color: "black", textDecoration: "none" }}>
                <NavLink to="/signup" style={{ color: "green", textDecoration: "none", fontWeight:"bold"}}>Create an account</NavLink>
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBContainer>
      </>
    </div>
  )
}

export default Login