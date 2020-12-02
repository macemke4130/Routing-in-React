import React, { Component } from 'react';

class FilmCard extends Component {

    render() {
        return this.props.filmList.map((i) => (
            <>
                <div className="card">
                    <h2>{i.title}</h2>
                </div>
            </>
        ));
    }
}

export default FilmCard;