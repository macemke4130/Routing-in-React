import React, { Component } from 'react';
import Loading from './Loading';

class IdFilm extends Component {
    state = {
        myFlick: [],
        hasLoaded: false
    }

    componentDidMount() {
        this.getFlick();
    }

    getFlick = () => {
        let whatFlick = this.props.match.params.id
        fetch("https://ghibliapi.herokuapp.com/films/" + whatFlick)
            .then(res => res.json())
            .then(returnedFlick => {
                this.setState({
                    myFlick: returnedFlick,
                    hasLoaded: true
                });
            }).catch(err => {
                console.log(err);
            });
    }


    render() {
        if (this.state.hasLoaded) {
            const i = this.state.myFlick
            return (
                <>
                    <div className="nav-bump"></div>
                    <h1>{i.title}</h1>
                    <h3>Directed by {i.director}</h3>
                    <h3>Produced by {i.producer}</h3>
                    <h4>Release Date: {i.release_date}</h4>
                    <h4>Rotton Tomatoes Score: {i.rt_score}%</h4>
                    <div>
                        <p>{i.description}</p>
                    </div>
                </>
            )
        } else {
            return (<Loading />)
        }

    }
}

export default IdFilm;