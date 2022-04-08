import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/styled_components";
import googleLogo from "../assets/images/google-logo.svg";
import logoName from "../assets/images/logoName.svg";
import logo from "../assets/images/logo.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupPage = () => {
  const formHandler = (values, { resetForm }) => {
    console.log("values from sign up page", values);

    if (values !== null) {
      const newUser = { ...values };
    }

    resetForm();
  };
  const lowercaseRegex = /(?=.*[a-z])/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username cannot be less than 3 characters")
      .max(40, "Username cannot have more than 40 characters")
      .required("Username is required"),
    email: Yup.string()
      .lowercase()
      .email("Type a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(lowercaseRegex, "At least 1 lowercase is required")
      .matches(uppercaseRegex, "At least 1 uppercase is required")
      .matches(numericRegex, "At least 1 number is required")
      .min(8, "Password should be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Confirm password must be the same as password"
      )
      .required("Confirm password cannot be empty"),
  });

  return (
    <div className=" landingpage sm:flex w-full h-screen bg-gray-700 bg-landing-img bg-no-repeat bg-center bg-cover bg-blend-overlay overflow-auto sm:overflow-hidden">
      {/* Name/logo && SignIn/Up choice */}
      <div className="flex sm:w-1/2 my-auto ">
        <div className="flex-col h-1/6 py-10 sm:ml-4 sm:my-auto ml-8 sm:justify-center">
          {/* Company Name & Logo */}
          <div className=" flex items-center ">
            <img className="h-10 md:h-14" src={logo} alt="company logo" />
            <img
              className="h-8 md:h-10 ml-2 mt-3"
              src={logoName}
              alt="company name logo "
            />
          </div>
          {/* SignIn/Up choice */}
          <p className="text-white text-left text-base md:text-2xl mt-4 hidden sm:block">
            Sign in or Create a new account
          </p>
        </div>
      </div>

      {/* Card Container */}
      <div className="sm:my-auto sm:w-1/2 md:p-12 h-screen md:w-4/6 lg:w-3/5 lg:px-20 xl:px-32">
        <div className="bg-white md:rounded-xl p-10 text-left text-xs sm:overflow-y-auto h-full">
          <div className=" flex-col items-center justify-between">
            <p className="text-teal text-base text-right">
              <Link to="/login">Sign in</Link>
            </p>
            <h1 className="text-2xl my-2 font-extrabold text-black">
              Create an account
            </h1>
            <div className="googleSignIn flex items-center justify-center mt-10 mb-6  w-full">
              <img className="h-6 w-1/6" src={googleLogo} alt="google logo" />
              <a>
                <p>Sign up with Google</p>
              </a>
            </div>
            <p className="text-center text-teal mb-6">or</p>
          </div>
          <p className="text-sm my-3">Enter your details below</p>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={formHandler}
          >
            {({ errors, touched }) => (
              <Form className="flex-col h-auto items-center space-y-6 pt-5">
                <div>
                  <label htmlFor="name">Enter your name</label>
                  <Field
                    className={`grid w-full h-6 outline-none p-0.5 mb-0.5 ${
                      errors.username && touched.username
                        ? "border border-red-50"
                        : "border border-gray-50"
                    }`}
                    type="text"
                    name="username"
                  />
                  <hr
                    className={`border-t ${
                      errors.username && touched.username
                        ? "border-red-400"
                        : "border-teal  "
                    }`}
                  />
                  {errors.username && touched.username ? (
                    <ErrorMessage
                      component={"p"}
                      name="username"
                      className=" text-tiny text-red-400"
                    ></ErrorMessage>
                  ) : null}
                </div>
                <div>
                  <label>Email address</label>
                  <Field
                    className={`grid w-full h-6 outline-none p-0.5 mb-0.5 ${
                      errors.email && touched.email
                        ? "border border-red-50"
                        : "border border-gray-50"
                    }`}
                    type="email"
                    name="email"
                  />
                  <hr
                    className={`border-t ${
                      errors.email && touched.email
                        ? "border-red-400"
                        : "border-teal  "
                    }`}
                  />
                  {errors.username && touched.username ? (
                    <ErrorMessage
                      component={"p"}
                      className="text-tiny text-red-400"
                      name="email"
                    />
                  ) : null}
                </div>
                <div>
                  <label>Enter Password</label>
                  <Field
                    className={`grid w-full h-6 outline-none p-0.5 mb-0.5 ${
                      errors.password && touched.password
                        ? "border border-red-50"
                        : "border border-gray-50"
                    }`}
                    type="password"
                    name="password"
                  />
                  <hr
                    className={`border-t ${
                      errors.password && touched.password
                        ? "border-red-400"
                        : "border-teal  "
                    }`}
                  />
                  {errors.username && touched.username ? (
                    <ErrorMessage
                      component={"p"}
                      className="text-tiny text-red-400"
                      name="password"
                    />
                  ) : null}
                </div>
                <div>
                  <label>Re-enter password</label>
                  <Field
                    className={`grid w-full h-6 outline-none p-0.5 mb-0.5 ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border border-red-50"
                        : "border border-gray-50"
                    }`}
                    type="password"
                    name="confirmPassword"
                  />
                  <hr
                    className={`border-t ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-400"
                        : "border-teal  "
                    }`}
                  />
                  {errors.username && touched.username ? (
                    <ErrorMessage
                      component={"p"}
                      className="text-tiny text-red-400"
                      name="confirmPassword"
                    />
                  ) : null}
                </div>
                <div className="text-teal pt-2">
                  <input className="border border-teal" type="checkbox"></input>
                  <label className="ml-2 font-medium">Remember me</label>
                </div>
                <div className="flex justify-end items-end w-full">
                  <Button type="submit">Create account</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
