import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Accounts

  // Pages
import RegistrationPage from './pages/registration/RegistrationPage';

  // Components
import GetStartedForm from './components/accounts/GetStartedForm';
import LoginForm from './components/accounts/LoginForm';
import RegistrationForm from './components/accounts/RegistrationForm';
import RegisterPhoneNumberForm from './components/accounts/RegisterPhoneNumberForm';
import RegisterPlanForm from './components/accounts/RegisterPlanForm';

// Profiles
import ProfileLoginForm from './components/profiles/ProfileLoginForm';
import ProfileList from './components/profiles/ProfileList';
import CreateProfile from './components/profiles/CreateProfile';
import UpdateProfile from './components/profiles/UpdateProfile';
import ViewProfiles from './pages/profile/ViewProfilesPage/ViewProfiles';
import AddProfile from './pages/profile/AddProfilePage/AddProfile';
import EditProfile from './pages/profile/EditProfilePage/EditProfile';
import ManageProfiles from './pages/profile/ManageProfilesPage/ManageProfiles';
import ProfileLogin from './pages/profile/ProfileLoginPage/ProfileLogin';


ReactDOM.render(
    <App />

    // Accounts

    // Pages
    // <RegistrationPage />

    // Components
    // <GetStartedForm />
    // <LoginForm />
    // <RegistrationForm />
    // <RegisterPlanForm />
    // <RegisterPhoneNumberForm />


    /*** Profiles **/
    
    // Pages
    // <ViewProfiles />
    // <AddProfile />
    // <EditProfile />
    // <ManageProfiles />
    // <ProfileLogin />

    //Components
    // <ProfileList />
    // <ProfileLoginForm />
    // <CreateProfile />
    // <UpdateProfile />


,document.getElementById('root')
);