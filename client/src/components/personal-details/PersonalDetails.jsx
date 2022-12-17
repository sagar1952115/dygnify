import React, { useState } from "react";
import "./PersonalDetails.css";
const PersonalDetails = ({
  state,
  setpersonalValidate,
  setPersonalInfo,
  setPersonal,
  setBusiness,
  handleState,
}) => {
  const { firstName, lastName, age, mobile, email } = state.personalData;
  const [fnameError, setfnameError] = useState("");
  const [lnameError, setlnameError] = useState("");
  const [ageError, setageError] = useState("");
  const [mobileError, setmobileError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleChange = (type, val) => {
    const newData = {
      ...state.personalData,
      [type]: val,
    };
    handleState("personalData", newData);
  };

  const validateFname = () => {
    const result = /^[a-zA-Z ]+$/.test(firstName);
    if (!result || firstName === "") {
      setfnameError("Enter a valid Name");
      return false;
    } else {
      setfnameError("");
    }
    return true;
  };
  const validateLname = () => {
    if (lastName === "") {
      setlnameError("");
      return true;
    }
    const result = /^[a-zA-Z ]+$/.test(lastName);
    if (!result) {
      setlnameError("Enter a valid Name");
      return false;
    } else {
      setlnameError("");
    }
    return true;
  };

  const validateMobile = () => {
    // var mobileNo = mobile.current.value;

    const phoneNo = /^\d{10}$/;
    if (
      !mobile.match(phoneNo) ||
      mobile[0] === "5" ||
      mobile[0] === "4" ||
      mobile[0] === "3" ||
      mobile[0] === "2" ||
      mobile[0] === "1" ||
      mobile[0] === "0"
    ) {
      setmobileError("Enter a Valid Mobile Number");
      return false;
    } else {
      setmobileError("");
    }
    return true;
  };

  const validateAge = () => {
    var a = parseInt(age);
    if (a < 18 || age === "") {
      setageError("Enter valid age");
      return false;
    } else {
      setageError("");
    }
    return true;
  };

  const validateEmail = () => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(reg) || email === "") {
      setemailError("Enter a Valid Email");
      return false;
    } else {
      setemailError("");
    }
    return true;
  };

  const validatePersonalInfo = () => {
    if (
      validateEmail() &&
      validateFname() &&
      validateLname() &&
      validateAge() &&
      validateMobile()
    ) {
      setpersonalValidate(true);
      return true;
    } else {
      setpersonalValidate(false);
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo({
      firstName,
      lastName,
      age,
      mobile,
      email,
    });
    if (validatePersonalInfo()) {
      setPersonal(false);
      setBusiness(true);
    } else {
      alert("Enter all the fields correctly");
    }
  };
  return (
    <div>
      <div className="details-main">
        <div className="heading">Personal Details</div>
        <input
          className="details-input"
          onBlur={validateFname}
          value={firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          type="text"
          placeholder="First Name"
        />
        {fnameError !== "" && <p className="error">{fnameError}</p>}
        <input
          className="details-input"
          onBlur={validateLname}
          value={lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          type="text"
          placeholder="Last Name"
        />
        {lnameError !== "" && <p className="error">{lnameError}</p>}
        <input
          className="details-input"
          onBlur={validateAge}
          value={age}
          onChange={(e) => handleChange("age", e.target.value)}
          type="text"
          placeholder="Age"
        />
        {ageError !== "" && <p className="error">{ageError}</p>}
        <input
          className="details-input"
          onBlur={validateMobile}
          value={mobile}
          onChange={(e) => handleChange("mobile", e.target.value)}
          type="text"
          placeholder="Mobile No"
        />
        {mobileError !== "" && <p className="error">{mobileError}</p>}
        <input
          className="details-input"
          onBlur={validateEmail}
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          type="email"
          placeholder="Email"
        />
        {emailError !== "" && <p className="error">{emailError}</p>}
        <div className="btn-parent home-btn-div">
          <div className="home-content-btn">
            <button
              type="button"
              className="btn-booking"
              onClick={handleSubmit}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
