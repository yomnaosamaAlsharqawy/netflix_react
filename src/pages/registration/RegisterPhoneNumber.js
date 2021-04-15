import RegisterPhoneNumberForm from "../../components/accounts/RegisterPhoneNumberForm";
import Layout from "./Layout";

export default function RegisterPhoneNumber() {
  return (
    <Layout>
      <div className="col-md-6 col-lg-5 mb-5">
        <div>
          <div className="font-weight-bold text-muted">STEP 3 OF 3</div>
          <div className="h4 font-weight-bold">Enter your details</div>
          <div className="lead small">
            your phone number will be used if you forgot your password and for
            important account messages. SMS fees may apply.
          </div>
        </div>
        <div>
          <RegisterPhoneNumberForm />
        </div>
      </div>
    </Layout>
  );
}
