import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MovieCard } from '../components/MovieCard'
import { getMovieDetailsService } from '../redux/actions/moviesList'



class Home extends Component {

  componentDidMount() {
    this.props.getMoviesList("/movies/moviesList");

  }

  render() {
    const { data } = this.props
    return (
      data ?
        <div className="movie-page">
          <div className="container">
            <div className="header">
              <h1 className="heading">Movies List</h1>

              <span className="count-pill">
                {data.length} {data.length === 1 ? "Movie" : "Movies"}
              </span>
            </div>

            {data.length > 0 ? (
              <div className="movie-grid">
                {data.map((movie) => (
                  <MovieCard {...movie} />
                ))}
              </div>
            ) : (
                <h2 className="no-movies">No movies in your list! Add some!</h2>
              )}
          </div>
        </div>
        : null

    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMoviesList: (url) => dispatch(getMovieDetailsService(url)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);