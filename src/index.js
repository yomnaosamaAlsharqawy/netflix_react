import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// Accounts
import LoginForm from './components/forms/LoginForm';
import GetStartedForm from './components/forms/GetStartedForm';
// Profiles
import ProfileLoginForm from './components/forms/ProfileLoginForm';
// GetStarted
import GetStarted from './pages/GetStarted/GetStarted'
import Login from './pages/Login/Login'




ReactDOM.render(
     <App />

    // Accounts
    // <LoginForm />
    // <GetStartedForm />

    // Profiles
    // <ProfileLoginForm />
    //  <GetStarted/>
    // <Login/>
    
,document.getElementById('root')
);

