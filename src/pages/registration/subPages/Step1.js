import './Step1.css'

export default function Step1() {
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
            <div className="StepOneButton">
                <p>Continue</p>
            </div>
        </div>
    )
}