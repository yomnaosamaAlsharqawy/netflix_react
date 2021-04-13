import { useHistory } from "react-router-dom";
export default function Step3() {
  const History = useHistory();
  return (
    <div>
      <h1>Setup your payment</h1>
      <button
        className="StepThreeButton"
        onClick={() => {
          History.push("/signup/payment");
        }}
      >
        Credit or Debit Card
      </button>
    </div>
  );
}
