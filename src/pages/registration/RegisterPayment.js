import { useHistory } from "react-router-dom";
import Layout from "./Layout";
import Stripe from "../../components/Stripe/Stripe"


export default function RegisterPayment() {
  const History = useHistory();
  return (
    <Layout>
    <div className="col-md-6 col-lg-5 mb-5">
      <h1>Payment</h1>
      <Stripe />
    </div>
    </Layout>
  );
}
