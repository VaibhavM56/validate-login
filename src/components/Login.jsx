import React, { useState } from "react";

import {
  validfName,
  validlName,
  validAge,
  validGender,
  validEmail,
  validPassword,
} from "./Regex.js";

function Login() {
  let [loginData, setLoginData] = useState({
    fName: "",
    lName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });

  const validate = (e) => {
    e.preventDefault();

    if (!validfName.test(loginData.fName)) {
      alert("Invalid First Name");
    } else if (!validlName.test(loginData.lName)) {
      alert("Invalid Last Name");
    } else if (
      !validAge.test(loginData.age) ||
      loginData.age < 0 ||
      loginData.age > 150
    ) {
      alert("Invalid Age");
    } else if (!validGender.test(loginData.gender)) {
      alert("Invalid Gender");
    } else if (!validEmail.test(loginData.email)) {
      alert("Invalid Email");
    } else if (!validPassword.test(loginData.password)) {
      alert("Invalid Password");
    } else {
      console.log(loginData);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const loginCopy = { ...loginData };
    loginCopy[e.target.name] = e.target.value;
    setLoginData(loginCopy);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (
  //     loginData.fName === "" ||
  //     loginData.lName === "" ||
  //     loginData.age === "" ||
  //     loginData.gender === "" ||
  //     loginData.email === "" ||
  //     loginData.password === ""
  //   ) {
  //     alert("enter the data");
  //   }
  // };
  return (
    <div className="container border mt-3">
      <h2>Login Page</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="fName"
            className="form-control"
            onChange={handleChange}
            value={loginData.fName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            name="lName"
            className="form-control"
            onChange={handleChange}
            value={loginData.lName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Age:
          </label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={handleChange}
            value={loginData.age}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Gender:
          </label>
          <input
            type="text"
            name="gender"
            className="form-control"
            onChange={handleChange}
            value={loginData.gender}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={loginData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={loginData.password}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
