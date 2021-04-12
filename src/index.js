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
import ViewProfiles from './pages/profile/ViewProfiles';
import AddProfile from './pages/profile/AddProfile';
import EditProfile from './pages/profile/EditProfile';
import ManageProfiles from './pages/profile/ManageProfiles';


ReactDOM.render(
    <App />

    /** Accounts **/

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

    //Components
    // <ProfileList />
    // <ProfileLoginForm />
    // <CreateProfile />
    // <UpdateProfile />


,document.getElementById('root')
);

