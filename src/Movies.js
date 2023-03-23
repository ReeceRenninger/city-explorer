import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Movie from './Movie'

class Movies extends React.Component {
  render() {
    return (
      <Container>
        <Carousel >
          {this.props.movieInfo.map((movie, idx) => {
            return (
              <Movie
                movie={movie}
                idx={idx}
              />
            )
          })}
        </Carousel>
      </Container>
    )
  }
}


export default Movies;