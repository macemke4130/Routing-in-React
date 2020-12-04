import React, { Component } from 'react';
import Loading from './Loading';

class IdPerson extends Component {
    state = {
        myDude: [],
        mySpecies: "",
        hasLoaded: false
    }

    componentDidMount() {
        this.getDude();
    }

    getDude = () => {
        let who = this.props.match.params.id
        fetch("https://ghibliapi.herokuapp.com/people/" + who)
            .then(res => res.json())
            .then(returnedDude => {
                this.setState({
                    myDude: returnedDude,
                    hasLoaded: true
                });
            }).catch(err => {
                console.log(err);
            });
    }

    // Since the Species and Classification is inside of another endpoint,
    // the getSpecies() method is called after the initial render because
    // we need to reference the endpoint inside of i.species which is called
    // during the first render. Conditional statement here prevents
    // fetch() from looping.
    getSpecies = (x) => {
        if(this.state.mySpecies === ""){
            fetch(x)
            .then(res => res.json())
            .then(returnedSpecies => {
                this.setState({
                    mySpecies: returnedSpecies
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }

    render() {
        if (this.state.hasLoaded) {
            const i = this.state.myDude
            this.getSpecies(i.species)
            return (
                <>
                    <div className="nav-bump"></div>
                    <h1>{i.name}</h1>
                    <h3>Sex: {i.gender}</h3>
                    <h3>Eye Color: {i.eye_color}</h3>
                    <h3>Hair Color: {i.hair_color}</h3>
                    <h3>Species: {this.state.mySpecies.name}</h3>
                    <h5>Classification: {this.state.mySpecies.classification}</h5>
                </>
            )
        } else {
            return (<Loading />)
        }
    }
}

export default IdPerson;