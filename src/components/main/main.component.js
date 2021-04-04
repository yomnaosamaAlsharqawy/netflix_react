import {Link} from 'react-router-dom';
import './main.component.css';
export default function Main() {

    

    return (
        <div className='navContainer'>
            <Link className='home' to='/home'> 
                    <div className='logo'> NETFLIX PLUS  </div>
            </Link>

            <div className='linkContainer'>
                <Link to='/register'>
                    <div className='links'>Register</div>
                </Link>

                <Link to='/login'>
                    <div className='links'>Login</div>
                </Link>

                <Link to='/addsong'>
                    <div className='links'>Add Song</div>
                </Link>
            </div>
        </div>
    )
}
