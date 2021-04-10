import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Accounts
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



ReactDOM.render(
    <App />

    // Accounts
    // <GetStartedForm />
    // <LoginForm />
    // <RegistrationForm />
    // <RegisterPlanForm />
    // <RegisterPhoneNumberForm />


    // Profiles
    // <ProfileLoginForm />
    // <ProfileList />
    // <CreateProfile />
    //<UpdateProfile />


,document.getElementById('root')
);

