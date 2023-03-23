import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component {
  render() {
    const {movie, idx, ...rest} = this.props;
    return (
      <Carousel.Item {...rest} key={idx}>
        <img
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
          alt={movie.title}
        />
        <Carousel.Caption className='carousel-caption'>
          <h3>{movie.title}</h3>
          <p className='carousel-text'>{movie.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }
}



export default Movie;