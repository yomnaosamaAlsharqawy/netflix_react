import { useHistory } from "react-router-dom";

import "./Step2.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Step2() {
  const History = useHistory();
  return (
    <div className="SetTwoContainer">
      <div className="icon">
        <FontAwesomeIcon icon={faCheckCircle} />
      </div>
      <div className="step2">
        STEP <span>2</span> OF <span>3</span>
      </div>
      <div className="StepTwoHeader">Choose your plan.</div>
      <div className="StepTwoLine">
        <span>
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>{" "}
        No commitments, cancel anytime.
      </div>
      <div className="StepTwoLine">
        <span>
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>{" "}
        Everything on Netflix for one low price.
      </div>
      <div className="StepTwoLine">
        <span>
          <FontAwesomeIcon icon={faCheck} />{" "}
        </span>{" "}
        Unlimited viewing on all your devices.
      </div>
      <div className="StepTwoButton" onClick={() => {
          History.push("/signup/planform");
      }}>
        <p>See The Plans</p>
      </div>
    </div>
  );
}
