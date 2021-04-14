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
import ProfileLogin from "./pages/profile/ProfileLoginPage/ProfileLogin";


// Player
import Player from "./pages/player/Player";

// Stripe
// import Stripe from './components/Stripe/Stripe'

// Resources Pages
// import Movies from './components/Movies/Movies'
// import TvShows from './components/Tv-shows/Tv-shows'
// import Video from './components/video/video';
// import MoreInfo from './components/moreInfo/moreInfo';
// import Home from './components/Home/Home'
// import MyList from './components/MyList/MyList';

import Movies from './components/Movies/Movies';
import TvShows from './components/Tv-shows/Tv-shows'
import Home from './components/Home/Home';
import MyList from './components/MyList/MyList';
import MoreInfo from './components/moreinfo/MoreInfo'


export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Accounts */}
        <Route path="/" exact>
          <GetStarted />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup/regform">
          <RegisterEmailPassword />
        </Route>
        <Route path="/signup/planform">
          <RegisterPlan />
        </Route>
        <Route path="/signup/payment">
          <RegisterPayment />
        </Route>
        <Route path="/signup/phonenumber">
          <RegisterPhoneNumber />
        </Route>
        <Route path="/signup">
          <Registration />
        </Route>

        {/* Profiles */}
        <Route path="/profiles/login">
          <ProfileLogin />
        </Route>
        <Route path="/profiles/view">
          <ViewProfiles />
        </Route>
        <Route path="/profiles/add">
          <AddProfile />
        </Route>
        <Route path="/profiles/manage">
            <ManageProfiles />
        </Route>
        <Route path="/profiles/edit">
            <EditProfile />
        </Route>

        {/* Resources */}
        <Route path="/list">
          <MyList />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/tvshows">
          <TvShows />
        </Route>
        <Route path="/video">
          <Player />
        </Route>
        <Route path="/moreInfo">
          <MoreInfo/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}
