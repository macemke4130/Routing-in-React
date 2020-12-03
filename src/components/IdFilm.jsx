import React, { Component } from 'react';

class IdFilm extends Component {
    state = {
        myFlick: []
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
                });
                console.log(this.state.myFlick)
            }).catch(err => {
                console.log(err);
            });
    }


    render() {
        const i = this.state.myFlick
        return (
            <>
                <div className="nav-fix"></div>
                <h1>{i.title}</h1>
            </>
        )
    }
}

export default IdFilm;