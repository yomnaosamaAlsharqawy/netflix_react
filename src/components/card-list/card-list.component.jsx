import React from 'react'

import {Card} from '../card/card.component';

import './card-list.styles.css';


export const CardList = ({movieList}) => {
    return (
        <div className='card-list'>
                {movieList.map(movie => (
                <Card  key ={movie.id} movie = {movie}/>
                ))}
            </div>
    )
            
};
