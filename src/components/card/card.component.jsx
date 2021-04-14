import { useState } from 'react'
import './card.styles.css'


export const Card = ({movie}) => {
const [hovered, sethovered] = useState(false)


const handleHover = () => {
    sethovered(true)
}

const handleExit = () => {
    sethovered(false)
}

    return (
            <div onMouseLeave={handleExit} onMouseEnter={handleHover} className="card-container">  
                <div className='imageContainer'>
                    <img className="cardimg"
                    alt="movie"
                    src={movie.img}
                    />
                </div>
                <div className={hovered ? 'show' : 'hide'}>
                    <div className='buttonCointainer'>
                        <div className="leftButtonContainer">
                            <button className="circularButton">1</button>
                            <button className="circularButton">2</button>
                            <button className="circularButton">3</button>
                            <button className="circularButton">4</button>
                        </div>
                        <div className="rightButtonContainer">
                            <button className="circularButton">
                                5
                            </button>
                        </div>
                    </div>
                    <div className="secondRow">
                        <h2 className='secondRowInfo'>{movie.name}</h2>
                    </div>
                    <div className="thirdRow">
                        <ul className='genreList'>
                            <li>Witty</li>
                            <li>Romantic</li>
                            <li>Comedy</li>
                        </ul>
                    </div>
                </div>

            </div>
        
    )
}
