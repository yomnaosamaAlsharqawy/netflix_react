import './Step1.css';
import {useHistory} from 'react-router-dom';

export default function Step1() {
    const History = useHistory();
    return (
        <div className='SetOneContainer'>
            <div className="step">
                STEP <span>1</span> OF <span>3</span>
            </div>
            <div className="StepOneHeader">
                Finish setting up your account.
            </div>
            <div className="StepOneContent">
                <p>Netflix is personalized for you. Create a password to watch Netflix on any device at any time.</p>
            </div>
            <div className="StepOneButton" onClick={() => {
                History.push("/signup/regform");
            }}>
                <p>Continue</p>
            </div>
        </div>
    )
}