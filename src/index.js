import ReactDOM from 'react-dom';
import App from './App';
import LoginForm from './components/forms/LoginForm';
import ProfileLoginForm from './components/forms/ProfileLoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    // <App />
    // <LoginForm /> 
    <ProfileLoginForm />
,document.getElementById('root')
);

