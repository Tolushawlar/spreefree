import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../../assets/newbook.png';

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
            <img src={logo} alt="Book Store App" height="50px" />
               <strong>Book-IT</strong>              
            </h6>
            <p>
            This is a React bookstore application in which, user can view available books and its related information and also I can add them to my spreeList for later reading. Built this application to develop my ability to use multireact components and also how to consume API's in react. Used the ecommerce.js API to host book information
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Projects</strong></h6>
            <p>
              <a href="netlify.spreefree.app">SpreeFree</a>
            </p>
            <p>
              <a href="https://bamzi.ivyarc.com/">Bamzi</a>
            </p>
            <p>
              <a href="https://intellhigts.netlify.app/">Portfolio</a>
            </p>
          </MDBCol>

          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold"><strong>Contact</strong></h6>
            <p>
              <i className="fa fa-envelope mr-3" /> oluwasolaowoyemi.i@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +234 8109951960
            </p>
            <p>
              <i className="fa fa-home mr-3" /> Nigeria
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Made by
              <a href="#"> Olusola Itunu </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://github.com/Tolushawlar">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href='https://www.linkedin.com/in/olusola-itunu-082783128/'>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href='https://web.facebook.com/owoyemi.holushawlar'>
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href='https://twitter.com/holushawlae'>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;