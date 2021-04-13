import Layout from "./Layout";
import Step1 from "./subpages/Step1";
import Step2 from "./subpages/Step2";
import Step3 from "./subpages/Step3";

export default function Registration() {
  const account = JSON.parse(localStorage.getItem("account"));
  const step = account ? account.registration_state : 1;

  const currentStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <h1>No Match!</h1>;
    }
  };

  return (
    <Layout>
      <div className="col-md-6 col-lg-5 mb-5">{currentStep()}</div>
    </Layout>
  );
}
