import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Accounts
import LoginForm from './components/forms/LoginForm';
import GetStartedForm from './components/forms/GetStartedForm';
// Profiles
import ProfileLoginForm from './components/forms/ProfileLoginForm';




ReactDOM.render(
    // <App />

    // Accounts
    // <LoginForm />
    // <GetStartedForm />

    // Profiles
    <ProfileLoginForm />

,document.getElementById('root')
);

