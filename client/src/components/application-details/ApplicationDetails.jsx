import React, { useState } from "react";
import axios from "axios";

const ApplicationDetails = ({
  state,
  handleState,
  personalValidate,
  businessValidate,
  personalInfo,
  businessInfo,
  setPersonal,
  setBusiness,
  setApplication,
}) => {
  const { loanAmount, interest, tenure, panId } = state.applicationData;

  //   const [loanAmount, setLoanAmount] = useState("");
  //   const [interest, setInterest] = useState("");
  //   const [tenure, setTenure] = useState("");
  //   const [panId, setPanId] = useState("");

  const [amountError, setamountError] = useState("");
  const [interestError, setinterestError] = useState("");
  const [tenureError, settenureError] = useState("");
  const [panError, setpanError] = useState("");

  const handleChange = (type, val) => {
    const newData = {
      ...state.applicationData,
      [type]: val,
    };
    handleState("applicationData", newData);
  };

  const validateLoanAmount = () => {
    const result = /[1-9][0-9]*/.test(loanAmount);
    if (!result || loanAmount === "") {
      setamountError("Enter a valid amount");
      return false;
    } else {
      setamountError("");
    }
    return true;
  };
  const validateInterestRate = () => {
    const result = /^\d{1,2}(\.\d{1,2})?$/.test(interest);
    if (!result || interest === "") {
      setinterestError("Enter a valid interest rate");
      return false;
    } else {
      setinterestError("");
    }
    return true;
  };
  const validateTenure = () => {
    const result = /[1-9][0-9]*/.test(tenure);
    if (!result || tenure === "") {
      settenureError("Enter a valid Address");
      return false;
    } else {
      settenureError("");
    }
    return true;
  };
  const validatePanId = () => {
    const result = /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(panId);
    if (!result || panId === "") {
      setpanError("Enter a valid PAN ID");
      return false;
    } else {
      setpanError("");
    }
    return true;
  };

  const validateApplicationInfo = () => {
    if (
      validateLoanAmount &&
      validateInterestRate &&
      validateTenure &&
      validatePanId
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loanData = {
      firstname: personalInfo.firstName,
      lastname: personalInfo.lastName,
      age: personalInfo.age,
      mobile: personalInfo.mobile,
      email: personalInfo.email,
      businessname: businessInfo.businessName,
      businessaddress: businessInfo.businessAddress,
      gstno: businessInfo.gst,
      businessmobile: businessInfo.businessMobile,
      businessemail: businessInfo.businessEmail,
      loanamount: loanAmount,
      interestrate: interest,
      tenure: tenure,
      painid: panId,
    };
    if (validateApplicationInfo() && personalValidate && businessValidate) {
      try {
        const res = await axios.post("/loans", loanData);
        if (res.status === 200) {
          alert("Form Submitted Sucessfully");
          window.location.reload();
        } else if (!validateApplicationInfo()) {
          alert("Enter all the fields correctly");
        } else if (!personalValidate) {
          alert("Fill up Personal Info");
        } else if (!businessValidate) {
          alert("Fill up Business Info");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <div className="details-main">
        <div className="heading">Application Details</div>
        <input
          className="details-input"
          onBlur={validateLoanAmount}
          value={loanAmount}
          onChange={(e) => handleChange("loanAmount", e.target.value)}
          type="text"
          placeholder="Loan Amount"
        />
        {amountError !== "" && <p className="error">{amountError}</p>}
        <input
          className="details-input"
          onBlur={validateInterestRate}
          value={interest}
          onChange={(e) => handleChange("interest", e.target.value)}
          type="text"
          placeholder="Interest Rate"
        />
        {interestError !== "" && <p className="error">{interestError}</p>}
        <input
          className="details-input"
          onBlur={validateTenure}
          value={tenure}
          onChange={(e) => handleChange("tenure", e.target.value)}
          type="text"
          placeholder="Loan Tenure (in years)"
        />
        {tenureError !== "" && <p className="error">{tenureError}</p>}
        <input
          className="details-input"
          onBlur={validatePanId}
          value={panId}
          onChange={(e) => handleChange("panId", e.target.value)}
          type="text"
          placeholder="Pan id"
        />
        {panError !== "" && <p className="error">{panError}</p>}
        <div className="btn-parent home-btn-div">
          <div className="home-content-btn">
            <button className="btn-booking" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
