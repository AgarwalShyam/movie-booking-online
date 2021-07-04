import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MovieCard } from '../common/MovieCard'
import { data } from '../common/data'


class MovieDetails extends Component {


    render() {
        const { data } = this.props
        return (
            data ? data.map(a =>
                <MovieCard {...a} />
            ) : null
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.movies.data
    }
}


export default connect(mapStateToProps, null)(MovieDetails);