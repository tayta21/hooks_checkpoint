import React, { Component, useState } from 'react'
import johnwick from './img/john wick.jpg'
import '../App.css'
import StarRatingComponent from 'react-star-rating-component';



class MovieCard extends Component {

    render() {
        return (
                <div className="fisrtbox ">
                    <h2 className="tooltiptext titlebox" >{this.props.movie.title}</h2> 
                    <StarRatingComponent
                            name="rate1"
                            starCount={10}
                            value={this.props.movie.rating}
                        />
                    <img className="img" src={this.props.movie.img} alt='movie' />
                    <div className="box tooltiptext">
                        <p className="max">{this.props.movie.description}</p>
                       
                    </div>
                </div>
        )
    }

}

export default MovieCard;