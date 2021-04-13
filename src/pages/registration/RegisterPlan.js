import RegisterPlanForm from "../../components/accounts/RegisterPlanForm";
import Layout from "./Layout";

export default function RegisterPlan() {
  return (
    <Layout>
      <div className="col-md-8 mb-5">
        <div className="font-weight-bold text-muted">STEP 2 OF 3</div>
        <div className="h4">Choose the plan that’s right for you</div>
        <div>Watch all you want. Ad-free.</div>
        <div>Recommendations just for you.</div>
        <div>Change or cancel your plan anytime.</div>
        <RegisterPlanForm />
      </div>
    </Layout>
  );
}
