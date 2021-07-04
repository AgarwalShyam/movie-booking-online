import React, { useEffect, useState, useMemo } from "react";
import { connect } from 'react-redux'
// import { GlobalContext } from "../context/GlobalState";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import TableContainer from '../components/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter } from '../common/filters';
import { MovieCard } from "../components/MovieCard";
import { getMovieDetailsService } from '../redux/MovieService/MovieService.actions'

const MoviesList = (props) => {

  useEffect(() => {
    props.getMoviesList();
  })
  const { data } = props;

  const columns = useMemo(
    () => [
      {
        Header: 'Movie Title',
        accessor: 'title',
      },
      {
        Header: 'Movie Cast',
        accessor: 'cast',
      },
      {
        Header: 'Movie Release Date',
        accessor: 'release_date',
      },
      {
        Header: 'Movie Rating',
        accessor: 'vote_average',
      },

    ],
    []
  );

  const renderRowSubComponent = (row) => {
    const {
      name: { first, last },
      location: { city, street, postcode },
      picture,
      cell,
    } = row.original;
    return (
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <CardImg top src={picture.large} alt='Card image cap' />
        <CardBody>
          <CardTitle>
            <strong>{`${first} ${last}`} </strong>
          </CardTitle>
          <CardText>
            <strong>Phone</strong>: {cell} <br />
            <strong>Address:</strong>{' '}
            {`${street.name} ${street.number} - ${postcode} - ${city}`}
          </CardText>
        </CardBody>
      </Card>
    );
  };

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
            <Container style={{ marginTop: 100 }}>
              <TableContainer
                columns={columns}
                data={data}
                renderRowSubComponent={renderRowSubComponent}
              />
            </Container>
          ) : (
              <h2 className="no-movies">No movies in your list! Add some!</h2>
            )}
        </div>
      </div>
      : null
  );
};

const mapStateToProps = state => {
  return {
    data: state.movies.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesList: () => dispatch(getMovieDetailsService()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)