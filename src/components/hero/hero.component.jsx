import {useState} from 'react'
import './hero.component.css'
import Main from '../main/main.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {


const [heroHovered, setheroHovered] = useState(false)

const handleHeroHover = () => {
   setTimeout(() => {
    setheroHovered(true)
   }, 2000); 

}

const handleHeroLeave = () => {
    setheroHovered(false)
}

    return (
        <div onMouseEnter={handleHeroHover} onMouseLeave={handleHeroLeave} className={`${heroHovered? 'heroVideo' : 'heroImg'} HeroContainer` }>
            <Main/>
            <div className="heroContent">
                <div className="">
                    <p className='heroTitle'>MOVIE TITLE</p>
                </div>
                <div className="heroParagraph">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A consequatur ut recusandae magni eos deserunt vitae ipsam illo ea eveniet!</p>
                </div>
                <div className="heroButtonContainer">
                    <div className='heroButton1'> <FontAwesomeIcon icon={faPlay} /> &nbsp; Play</div>
                    <div className='heroButton2'> <FontAwesomeIcon icon={faInfoCircle}/> &nbsp; More Info</div>
                </div>
            </div>
        </div>
    )
}
