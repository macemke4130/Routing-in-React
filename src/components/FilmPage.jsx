import React, { Component } from 'react';
import FilmCard from './FilmCard';

class FilmPage extends Component {
    state = {
        filmList: []
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
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <>
                <div className="nav-fix"></div>
                <div className="row justify-content-center">
                    <FilmCard filmList={this.state.filmList} />
                </div>
            </>
        )
    }
}

export default FilmPage; 