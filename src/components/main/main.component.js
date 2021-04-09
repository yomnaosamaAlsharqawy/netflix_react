import {Link} from 'react-router-dom';
import './main.component.css';
export default function Main() {

    

    return (
        <div className='navContainer'>
            <Link className='home' to='/home'> 
                    <div className='logo'> NETFLIX PLUS  </div>
            </Link>

            <div className='linkContainer'>
                <Link to='/movies'>
                    <div className='links'>Movies</div>
                </Link>

                <Link to='/tvshows'>
                    <div className='links'>TVShows</div>
                </Link>

                <Link to='/mylist'>
                    <div className='links'>My List</div>
                </Link>
            </div>
        </div>
    )
}
