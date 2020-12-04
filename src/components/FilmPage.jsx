import React, { Component } from 'react';
import FilmCard from './FilmCard';
import Loading from './Loading';

class FilmPage extends Component {
    state = {
        filmList: [],
        hasLoaded: false
    };

    componentDidMount() {
        this.showFilms();
    }

    showFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(returnedFilms => {
                this.setState({
                    filmList: returnedFilms,
                    hasLoaded: true
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <>
                    <div className="nav-bump"></div>
                    <div className="row justify-content-center">
                        <FilmCard filmList={this.state.filmList} />
                    </div>
                </>
            )
        } else {
            return (<Loading />)
        }
    }
}

export default FilmPage; 