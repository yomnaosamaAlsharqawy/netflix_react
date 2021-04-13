import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import AccountContext from "./context/AccountContext";

// Account Pages
import GetStarted from "./pages/GetStarted/GetStarted";
import Login from "./pages/Login/Login";
import Registration from "./pages/registration/Registration";
import RegisterEmailPassword from "./pages/registration/RegisterEmailPassword";
import RegisterPlan from "./pages/registration/RegisterPlan";
import RegisterPayment from "./pages/registration/RegisterPayment";
import RegisterPhoneNumber from "./pages/registration/RegisterPhoneNumber";

// Profile Pages
import ViewProfiles from "./pages/profile/ViewProfilesPage/ViewProfiles";
import AddProfile from "./pages/profile/AddProfilePage/AddProfile";
import EditProfile from "./pages/profile/EditProfilePage/EditProfile";
import ManageProfiles from "./pages/profile/ManageProfilesPage/ManageProfiles";
// import ProfileLogin from '../profile/ProfileLoginPage/ProfileLogin';

// Stripe

import Stripe from './components/Stripe/Stripe'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Accounts */}
        <Route path="/" exact component={GetStarted} />
        <Route path="/login" component={Login} />
        <Route path="/signup/regform" component={RegisterEmailPassword} />
        <Route path="/signup/planform" component={RegisterPlan} />
        <Route path="/signup/payment" component={Stripe} />
        <Route path="/signup/otpPhoneEntry" component={RegisterPhoneNumber} />
        <Route path="/signup" component={Registration} />

        {/* Profiles */}
        <Route path="/profiles/view" component={ViewProfiles} />
        <Route path="/profiles/add" component={AddProfile} />
        <Route path="/profiles/manage" component={ManageProfiles} />
        <Route path="/profiles/edit" component={EditProfile} />

        {/* Resources */}
      </Switch>
    </Router>
  );
}
