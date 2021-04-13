import { useEffect, useState } from "react";
import accountApi from "../../api/account";
import { Button, Table } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const styles = {
  planSelect: {
    height: "7em",
    width: "7em",
    color: "white",
    alignText: "center",
    backgroundColor:"red" 
  },
}

function RegistrationForm() {
  const History = useHistory();
  const [plans, setPlans] = useState([]);
  const account = JSON.parse(localStorage.getItem("account"));
  const [plan_id, selectPlan] = useState(3);
  console.log()


  useEffect(async () => {
    const plansArr = await accountApi.getPlans();
    setPlans(plansArr);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account) {
      const [data, status] = await accountApi.registerPlan({
        id: account.id,
        plan_id: plan_id,
      }); 
      if (status === 200) {
        await localStorage.setItem('account', JSON.stringify(data));
        History.push('/signup');
      }
      
    }
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex w-100 justify-content-center">
        <Table responsive className="mt-3">
          <thead>
            <tr>
              <th></th>
              {plans.map((plan) => (
                <th key={plan.id}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      ...styles.planSelect,
                      opacity: plan_id === plan.id ? "1" : ".6",
                    }}
                    onClick={()=> {
                      selectPlan(plan.id);
                    }}
                  >
                    {plan.title}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Price</td>
              {plans.map((plan, index) => (
                <td
                  className="text-center"
                  key={index}
                  style={{ color: plan_id === plan.id ? "red" : "black" }}
                >
                  EGP {parseInt(plan.price)}
                </td>
              ))}
            </tr>
            <tr>
              <td>Video Quality</td>
              {plans.map((plan, index) => (
                <td
                  className="text-center"
                  key={index}
                  style={{ color: plan_id === plan.id ? "red" : "black" }}
                >
                  {plan.video_quality}
                </td>
              ))}
            </tr>
            <tr>
              <td>Resoultion</td>
              {plans.map((plan, index) => (
                <td
                  className="text-center"
                  key={index}
                  style={{ color: plan_id === plan.id ? "red" : "black" }}
                >
                  {plan.resolution}
                </td>
              ))}
            </tr>
            <tr>
              <td>Watch on your TV, computer, mobile phone and tablet</td>
              {plans.map((plan, index) => (
                <td
                  className="text-center"
                  key={index}
                  style={{ color: plan_id === plan.id ? "red" : "black" }}
                >
                  {plan.supported_device}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="small text-muted mt-4">
        Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
        internet service and device capabilities. Not all content available in
        HD, Full HD, Ultra HD or HDR. See Terms of Use for more details.
      </div>
      <div className="small text-muted mt-2">
        Only people who live with you may use your account. Watch on 4 different
        devices at the same time with Premium, 2 with Standard and 1 with Basic.
      </div>
      <div className="text-center mt-2">
        <Button
          className="w-50 mt-3"
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
