import React from 'react';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import { connect } from 'react-redux'
import { getMovieDetailsService } from '../redux/actions/moviesList'

class MovieTreeView extends React.Component {

    componentDidMount() {
        this.props.getMoviesList("/movies/moviesList");

    }
    render() {
        const { dataSource } = this.props
        const updatedDataSource = [];
        if (dataSource) {
            for (var i = 0; i < dataSource.length; i++) {

                if (i == 0) {
                    const updatedObject = {
                        cast: dataSource[i].cast,
                        children: [{
                            ...dataSource[i]
                        }]
                    }
                    updatedDataSource.push(updatedObject);
                }
                else {

                    const matachedData = updatedDataSource.find(data => data.cast === dataSource[i].cast);
                    if (matachedData) {
                        matachedData.children.push({ ...dataSource[i] })
                    }
                    else {
                        const updatedObject = {
                            cast: dataSource[i].cast,
                            children: [{
                                ...dataSource[i]
                            }]
                        }
                        updatedDataSource.push(updatedObject)
                    }


                }
            }
            console.log(dataSource);
        }

        return (
            updatedDataSource ? <div>
                {
                    updatedDataSource.map((node, i) => {
                        const { cast } = node;
                        const label = <span className="node">{cast}</span>;

                        return (

                            <TreeView key={cast + '|' + i} nodeLabel={label} defaultCollapsed={true}>
                                {node.children.map((subNode, j) => {
                                    const { release_date, vote_average, title } = subNode;
                                    const label2 = <span className="node">{release_date}</span>;
                                    return (
                                        <TreeView nodeLabel={label2} key={release_date} defaultCollapsed={true}>
                                            <div className="info">Title: {title}</div>
                                            <div className="info">Rating: {vote_average}</div>

                                        </TreeView>
                                    )
                                })}

                            </TreeView>
                        );
                    })
                }
            </div >
                : null
        );
    }
}

const mapStateToProps = state => {
    return {
        dataSource: state.movies.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMoviesList: (url) => dispatch(getMovieDetailsService(url)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTreeView)


