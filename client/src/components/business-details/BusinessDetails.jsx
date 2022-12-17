import React, { useState } from "react";

const BusinessDetails = ({
  state,
  handleState,
  setbusinessValidate,
  setBusinessInfo,
  setApplication,
  setBusiness,
}) => {
  const { businessName, businessEmail, businessAddress, businessMobile, gst } =
    state.businessData;
  const [businessError, setbusinessError] = useState("");
  const [addressError, setaddressError] = useState("");
  const [gstError, setgstError] = useState("");
  const [mobileError, setmobileError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleChange = (type, val) => {
    const newData = {
      ...state.businessData,
      [type]: val,
    };
    handleState("businessData", newData);
  };

  const validateBusinessname = () => {
    const result =
      /^[a-zA-Z0-9-@.{}#&!()]+(\s[a-zA-Z0-9-@{}.#&!()]+)+(\s[a-zA-Z-@.#&!()]+)?$/.test(
        businessName
      );
    if (!result || businessName === "") {
      setbusinessError("Enter a valid Business Name");
      return false;
    } else {
      setbusinessError("");
    }
    return true;
  };
  const validateAddress = () => {
    const result = /^[#.0-9a-zA-Z\s,-]+$/.test(businessAddress);
    if (!result || businessAddress === "") {
      setaddressError("Enter a valid Address");
      return false;
    } else {
      setaddressError("");
    }
    return true;
  };

  const validateMobile = () => {
    const phoneNo = /^\d{10}$/;
    if (
      !businessMobile.match(phoneNo) ||
      businessMobile[0] === "5" ||
      businessMobile[0] === "4" ||
      businessMobile[0] === "3" ||
      businessMobile[0] === "2" ||
      businessMobile[0] === "1" ||
      businessMobile[0] === "0"
    ) {
      setmobileError("Enter a Valid Mobile Number");
      return false;
    } else {
      setmobileError("");
    }
    return true;
  };

  const validateGst = () => {
    const result =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(gst);
    if (!result || gst === "") {
      setgstError("Enter valid GST number.");
      return false;
    } else {
      setgstError("");
    }
    return true;
  };

  const validateEmail = () => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!businessEmail.match(reg)) {
      setemailError("Enter a Valid Email");
      return false;
    } else {
      setemailError("");
    }
    return true;
  };

  const validateBusinessInfo = () => {
    if (
      validateBusinessname() &&
      validateAddress() &&
      validateEmail() &&
      validateMobile() &&
      validateGst()
    ) {
      setbusinessValidate(true);
      return true;
    } else {
      setbusinessValidate(false);
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBusinessInfo({
      businessName,
      businessAddress,
      gst,
      businessMobile,
      businessEmail,
    });
    if (validateBusinessInfo()) {
      setBusiness(false);
      setApplication(true);
    } else {
      alert("Enter all the fields correctly");
    }
  };
  return (
    <div>
      <div className="details-main">
        <div className="heading">Business Details</div>
        <input
          className="details-input"
          onBlur={validateBusinessname}
          value={businessName}
          onChange={(e) => handleChange("businessName", e.target.value)}
          type="text"
          placeholder="Business Name"
        />
        {businessError !== "" && <p className="error">{businessError}</p>}
        <input
          className="details-input"
          onBlur={validateAddress}
          value={businessAddress}
          onChange={(e) => handleChange("businessAddress", e.target.value)}
          type="text"
          placeholder="Business Address"
        />
        {addressError !== "" && <p className="error">{addressError}</p>}
        <input
          className="details-input"
          onBlur={validateGst}
          value={gst}
          onChange={(e) => handleChange("gst", e.target.value)}
          type="text"
          placeholder="GST Number"
        />
        {gstError !== "" && <p className="error">{gstError}</p>}
        <input
          className="details-input"
          onBlur={validateMobile}
          value={businessMobile}
          onChange={(e) => handleChange("businessMobile", e.target.value)}
          type="text"
          placeholder="Mobile No"
        />
        {mobileError !== "" && <p className="error">{mobileError}</p>}
        <input
          className="details-input"
          onBlur={validateEmail}
          value={businessEmail}
          onChange={(e) => handleChange("businessEmail", e.target.value)}
          type="email"
          placeholder="Business Email"
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

export default BusinessDetails;
