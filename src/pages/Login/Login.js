import './Login.css'

export default function Login() {
    return (
        <div className='SignInPageContainer'>
            <div className="SignInNav">
                <h1>NETFLIX</h1>
            </div>
            <div className="SignInContainer">
                <div className="SignInContainerHeader">
                    <h1>Sign In</h1>
                </div>
                <div className="SignInInput">
                    <input type="text" placeholder='Email or Phone Number'/>
                </div>
                <div className="SignInInput">
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="SignInButton">
                    <p>Sign In</p>
                </div>
                <div className="NewToNetflix">
                    <p className='link'>New to Netflix? <span>Sign up now.</span></p>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    <p>The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
                </div>
            </div>
            <div className="SignInFooter">
                <div className="Questions">
                    Questions? Contact Us.
                </div>
                
            </div>
        </div>
    )
}
