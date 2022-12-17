import "./App.css";
import { useState } from "react";
import ApplicationDetails from "./components/application-details/ApplicationDetails";
import BusinessDetails from "./components/business-details/BusinessDetails";
import PersonalDetails from "./components/personal-details/PersonalDetails";

function App() {
  const [personal, setPersonal] = useState(true);
  const [business, setBusiness] = useState(false);
  const [application, setApplication] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});
  const [businessInfo, setBusinessInfo] = useState({});
  const [personalValidate, setpersonalValidate] = useState(false);
  const [businessValidate, setbusinessValidate] = useState(false);

  const [state, setState] = useState({
    personalData: {
      firstName: "",
      lastName: "",
      age: "",
      mobile: "",
      email: "",
    },
    businessData: {
      businessName: "",
      businessAddress: "",
      gst: "",
      mobile: "",
      email: "",
    },
    applicationData: {
      loanAmount: "",
      interest: "",
      tenure: "",
      panId: "",
    },
  });

  const handleState = (type, objectVal) => {
    setState((prev) => ({
      ...prev,
      [type]: objectVal,
    }));
  };

  return (
    <div className="main-page">
      hello world
      <div className="main-title">
        <div
          onClick={() => {
            setPersonal(true);
            setBusiness(false);
            setApplication(false);
          }}
          className={personal ? "title bottom-none" : "title"}
        >
          Personal Details
        </div>
        <div
          onClick={() => {
            setPersonal(false);
            setBusiness(true);
            setApplication(false);
          }}
          className={business ? "title bottom-none" : "title"}
        >
          Business Details
        </div>
        <div
          onClick={() => {
            setPersonal(false);
            setBusiness(false);
            setApplication(true);
          }}
          className={application ? "title bottom-none" : "title"}
        >
          Loan Application Details
        </div>
      </div>
      <div className="main-content">
        {personal && (
          <PersonalDetails
            state={state}
            handleState={handleState}
            setpersonalValidate={setpersonalValidate}
            setPersonalInfo={setPersonalInfo}
            setPersonal={setPersonal}
            setBusiness={setBusiness}
            setApplication={setApplication}
          />
        )}
        {business && (
          <BusinessDetails
            state={state}
            handleState={handleState}
            setbusinessValidate={setbusinessValidate}
            setBusinessInfo={setBusinessInfo}
            setBusiness={setBusiness}
            setApplication={setApplication}
          />
        )}
        {application && (
          <ApplicationDetails
            state={state}
            handleState={handleState}
            personalValidate={personalValidate}
            businessValidate={businessValidate}
            businessInfo={businessInfo}
            personalInfo={personalInfo}
            setPersonal={setPersonal}
            setBusiness={setBusiness}
            setApplication={setApplication}
          />
        )}
      </div>
    </div>
  );
}

export default App;
