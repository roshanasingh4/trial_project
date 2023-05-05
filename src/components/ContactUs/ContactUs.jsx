import React, { useState } from "react";
import { Form as BootstrapForm, Spinner } from "react-bootstrap";
import Button from "../Button/Button";
import Wrapper from "./Wrapper";
import bg from "../../assets/Group 351.svg";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import saveContactInfo from "../../actions/contactUsAction";
import { useDispatch, useSelector } from "react-redux";

export default function ContactUs() {
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contactUs);
  const { loading, error } = contact;

  return (
    <Wrapper id="contactus">
      <div className="contact-us-container">
        <h3 className="contact-us-header">Contact Us</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, "Must be 50 characters or less ")
              .required("Required"),
            company: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.string()
              .max(15, "Must be 15 characters of less")
              .required("Required"),
            message: Yup.string().required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
            dispatch(saveContactInfo(values));
          }}
        >
          <Form>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <BootstrapForm.Group controlId="name">
                  <Field
                    name="name"
                    className="input-field"
                    type="text"
                    placeholder="Name"
                  />
                  <ErrorMessage name="name" />
                </BootstrapForm.Group>
              </div>
              <div className="col-lg-4 col-md-6">
                <BootstrapForm.Group controlId="company">
                  <Field
                    name="company"
                    className="input-field"
                    type="text"
                    placeholder="Company"
                  />
                  <ErrorMessage name="company" />
                </BootstrapForm.Group>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-4 col-md-6">
                <BootstrapForm.Group controlId="email">
                  <Field
                    name="email"
                    className="input-field"
                    type="text"
                    placeholder="Email"
                  />
                  <div>
                    <ErrorMessage name="email" />
                  </div>
                </BootstrapForm.Group>
              </div>
              <div className="col-lg-4 col-md-6">
                <BootstrapForm.Group controlId="phone">
                  <Field
                    name="phone"
                    className="input-field"
                    type="text"
                    placeholder="Phone"
                  />
                  <ErrorMessage name="phone" />
                </BootstrapForm.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <BootstrapForm.Group controlId="message">
                  <label for="message">Message</label>
                  <Field
                    name="message"
                    as="textarea"
                    className="text-area"
                    type="text"
                  />
                  <ErrorMessage name="message" />
                </BootstrapForm.Group>
              </div>
              {error ? <div className="text-danger pt-3">{error}</div> : null}
            </div>
            <div className="row">
              <div className="col-md-3">
                <Button
                  type="submit"
                  width="100%"
                  disabled={loading ? true : false}
                  className={"my-4 submit-btn"}
                  bg={
                    "transparent linear-gradient(260deg, #41E2C9 0%, #600FFB 100%) 0% 0% no-repeat padding-box"
                  }
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="">
        <div className="row bg-img-container">
          <div className="col-md-3 img-inner">
            <img className="img-fluid" src={bg} alt="bg" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
