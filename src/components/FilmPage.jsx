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
        const flick = this.state.filmList.map((flick) => flick);
        return (
            <>
                <div className="nav-fix"></div>
                <FilmCard filmList={flick} />
            </>
        )
    }
}

export default FilmPage; 