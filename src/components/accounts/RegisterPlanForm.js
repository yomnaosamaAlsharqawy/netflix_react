import { useEffect, useState } from "react";
import accountApi from "../../api/account";
import { Form, Button, FormCheck } from "react-bootstrap";

function RegistrationForm() {
  const [plan, selectPlan] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, status] = await accountApi.registerPlan({
      id: 1, // <-- get id from context
      plan_id: plan,
    });

    console.log(data, status);
  };

  useEffect(() => {
    // fetch for plans
    return false;
  }, []);

  return (
    <div className="d-flex flex-column">
    <div className="d-flex w-100 justify-content-center">
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: plan === 1 ? "red" : "grey",
        }}
        onClick={() => selectPlan(1)}
      >
        Plan1
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: plan === 2 ? "red" : "grey",
        }}
        onClick={() => selectPlan(2)}
      >
        Plan2
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: plan === 3 ? "red" : "grey",
        }}
        onClick={() => selectPlan(3)}
      >
        Plan3
      </div>
      
    </div>
    <div className="text-center mt-2">
    <Button
      className="w-25"
      variant="danger"
      type="submit"
      onClick={handleSubmit}
    >
      Continue
    </Button>
    </div>
    </div>
  );
}

export default RegistrationForm;
