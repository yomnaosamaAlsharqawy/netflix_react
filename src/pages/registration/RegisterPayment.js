import { useHistory } from "react-router-dom";

export default function RegisterPayment() {
  const History = useHistory();
  return (
    <div className="col-md-6 col-lg-5 mb-5">
      <h1>Payment</h1>
      <button className="btn btn-danger"
        onClick={() => {
          History.push("/signup/otpPhoneEntry");
        }}
      >
        Continue
      </button>
    </div>
  );
}
